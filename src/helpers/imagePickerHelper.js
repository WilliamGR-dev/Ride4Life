// import {Platform} from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';
// import {PERMISSIONS} from 'react-native-permissions';
//
// import {alert} from '../services/alertService';
// import {checkAndRequestMultiplePermissions} from '../services/permissionsService';
// import {warn} from '../services/loggerService';
// import {t} from 'react-i18nify';
//
// export const getImageFromPicker = async (options, source) => {
//   if (source && !['camera', 'gallery'].includes(source)) {
//     throw new Error('Source must be camera or gallery');
//   }
//
//   const commonOptions = {
//     loadingLabelText: t('image_picker.loading_label'),
//     cropperChooseText: t('image_picker.cropper_choose'),
//     cropperCancelText: t('image_picker.cropper_cancel'),
//   };
//
//   try {
//     const buttons = [
//       {
//         text: t('image_picker.from_camera'),
//         resolve: 'camera',
//       },
//       {
//         text: t('image_picker.from_gallery'),
//         resolve: 'gallery',
//       },
//       {
//         text: t('global.cancel'),
//         resolve: null,
//       },
//     ];
//
//     if (Platform.OS === 'android') {
//       buttons.reverse();
//     }
//
//     const choice =
//       source ||
//       (await alert(t('image_picker.choose_image'), undefined, buttons, null));
//
//     if (!choice) {
//       return null;
//     }
//
//     let action;
//     let permissions;
//
//     if (choice === 'camera') {
//       permissions = Platform.select({
//         android: [PERMISSIONS.ANDROID.CAMERA],
//         ios: [PERMISSIONS.IOS.CAMERA],
//       });
//       action = ImagePicker.openCamera;
//     } else {
//       permissions = Platform.select({
//         android: [PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE],
//         ios: [PERMISSIONS.IOS.PHOTO_LIBRARY],
//       });
//       action = ImagePicker.openPicker;
//     }
//
//     if (!(await checkAndRequestMultiplePermissions(permissions))) {
//       return;
//     }
//
//     return await action({...commonOptions, ...options});
//   } catch (e) {
//     if (e.message === 'User cancelled image selection') {
//       return;
//     }
//
//     warn(e);
//     return null;
//   }
// };
//
// export default {
//   getImageFromPicker,
// };
