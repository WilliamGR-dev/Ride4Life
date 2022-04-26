import {useCallback, useEffect, useState} from 'react';

import apiHelper from '../../../helpers/apiHelper';
import countriesHelper from '../../../helpers/countriesHelper';
import formHelper from '../../../helpers/formHelper';
import alertHelper from '../../../helpers/alertHelper';

import {useNavigator} from '../../../hooks';
import {useSelector} from 'react-redux';
import {refreshUserProfileData} from '../../../helpers/reduxHelper';
import {getImageFromPicker} from '../../../helpers/imagePickerHelper';

const useController = props => {
  const {outsideNavigator} = props;

  const userProfile = useSelector(s => s.userProfile);

  const [cities, setCities] = useState();

  const [firstName, setFirstName] = useState(userProfile.user.first_name);
  const [lastName, setLastName] = useState(userProfile.user.last_name);
  const [address, setAddress] = useState(userProfile.address);
  const [phoneNumber, setPhoneNumber] = useState(userProfile.phone);
  const [city, setCity] = useState(userProfile.city);
  const [isVehiculed, setIsVehiculed] = useState(userProfile.is_vehiculed);
  const [maxDistance, setMaxDistance] = useState(
    userProfile.max_distance_able_to_commute || 50,
  );
  const [avatar, setAvatar] = useState();

  const [phoneCountry, setPhoneCountry] = useState(
    countriesHelper.getCountryFromCca2(
      formHelper.getRegionCodeFromPhoneNumber(phoneNumber) || 'FR',
    ),
  );

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [cityError, setCityError] = useState(false);

  const {goBack} = useNavigator();

  const loadData = useCallback(async () => {
    await refreshUserProfileData();

    const res = await apiHelper.getProfileCities();

    if (res.status !== 200) {
      return;
    }

    setCities(
      res.content.map(o => ({
        label: o.name,
        value: o.id,
      })),
    );
  }, []);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const validateFirstName = useCallback(() => {
    const isValid = !!firstName;
    setFirstNameError(!isValid);
    return isValid;
  }, [firstName]);

  const validateLastName = useCallback(() => {
    const isValid = !!lastName;
    setLastNameError(!isValid);
    return isValid;
  }, [lastName]);

  const validateAddress = useCallback(() => {
    const isValid = !!address;
    setAddressError(!isValid);
    return isValid;
  }, [address]);

  const validatePhoneNumber = useCallback(() => {
    const phoneNumberFormatted = formHelper.validateAndNormalizePhoneNumber(
      phoneNumber,
      phoneCountry.cca2,
    );

    if (phoneNumberFormatted) {
      setPhoneNumber(phoneNumberFormatted);
    }

    const isValid = !!phoneNumber && !!phoneNumberFormatted;
    setPhoneNumberError(!isValid);
    return isValid;
  }, [phoneCountry, phoneNumber]);

  const validateCity = useCallback(() => {
    const isValid = city !== null;
    setCityError(!isValid);
    return isValid;
  }, [city]);

  useEffect(() => {
    phoneNumber && validatePhoneNumber();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phoneCountry]);

  useEffect(() => {
    city !== null && validateCity();
  }, [city, validateCity]);

  const submit = useCallback(async () => {
    if (
      // eslint-disable-next-line no-bitwise
      !validateFirstName() |
      !validateLastName() |
      !validateAddress() |
      !validatePhoneNumber() |
      !validateCity()
    ) {
      return;
    }

    if (!userProfile.profile_picture && !avatar) {
      alertHelper.informProfilePictureMissing();
      return;
    }

    const phoneNumberFormatted =
      formHelper.validateAndNormalizePhoneNumber(phoneNumber);

    const resUser = await apiHelper.updateProfile(
      userProfile.id,
      firstName,
      lastName,
    );

    if (resUser.status === 400) {
      resUser.content.first_name &&
        setFirstNameError(resUser.content.firstname);
      resUser.content.last_name && setLastNameError(resUser.content.lastname);

      return;
    }

    const resSampler = await apiHelper.updateSamplerProfile(
      userProfile.id,
      address,
      phoneNumberFormatted,
      city,
      isVehiculed,
      maxDistance,
      avatar ? avatar.data : undefined,
    );

    if (resSampler.status === 400) {
      resSampler.content.address && setAddressError(resSampler.content.address);
      resSampler.content.phone && setPhoneNumberError(resSampler.content.phone);
      resSampler.content.city && setCityError(resSampler.content.city);

      return;
    }

    alertHelper.informProfileUpdated();

    await refreshUserProfileData();

    !outsideNavigator && goBack();
  }, [
    address,
    avatar,
    city,
    firstName,
    goBack,
    isVehiculed,
    lastName,
    maxDistance,
    outsideNavigator,
    phoneNumber,
    userProfile.id,
    userProfile.profile_picture,
    validateAddress,
    validateCity,
    validateFirstName,
    validateLastName,
    validatePhoneNumber,
  ]);

  const takeProfilePicture = useCallback(async () => {
    const options = {
      includeBase64: true,
      compressImageMaxWidth: 1024,
      mediaType: 'photo',
      forceJpg: true,
      cropping: true,
      useFrontCamera: true,
      cropperCircleOverlay: true,
    };

    const res = await getImageFromPicker(options, 'camera');

    setAvatar(res);
  }, []);

  return {
    userProfile,
    cities,
    firstName,
    setFirstName,
    firstNameError,
    validateFirstName,
    lastName,
    setLastName,
    lastNameError,
    validateLastName,
    address,
    setAddress,
    addressError,
    validateAddress,
    phoneNumber,
    setPhoneNumber,
    phoneNumberError,
    validatePhoneNumber,
    phoneCountry,
    setPhoneCountry,
    city,
    setCity,
    cityError,
    submit,
    outsideNavigator,
    takeProfilePicture,
    avatar,
    isVehiculed,
    setIsVehiculed,
    maxDistance,
    setMaxDistance,
  };
};

export default useController;
