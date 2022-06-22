import {PERMISSIONS} from 'react-native-permissions';
import {sanitizePermission} from '../../services/permissionsService';

module.exports = {
  languages: {
    fr: 'Français', // ne pas traduire
  },
  global: {
    ok: 'Ok',
    cancel: 'Annuler',
    confirmation: 'Confirmation',
  },
  errors: {
    error_occurred: "Une erreur c'est produite",
    report_error: "Reporter l'erreur",
    report_email_info:
      'Ajoutez les informations qui peuvent nous aider à résoudre le problème : contexte, action effectuée, ...',
  },
  permissions: {
    incompatible_device_alert_title: 'Appareil incompatible',
    incompatible_device_alert_message:
      "Cet appareil n'est pas compatible avec certaines fonctionnalités",
    permission_blocked_alert_title: 'Permissions refusées',
    permission_blocked_alert_message:
      "Voulez vous être redirigé dans les réglages de l'appareil pour autoriser les permissions manquantes ?",
    [sanitizePermission(PERMISSIONS.ANDROID.CAMERA)]: 'Appareil photo',
    [sanitizePermission(PERMISSIONS.IOS.CAMERA)]: 'Appareil photo',
    [sanitizePermission(PERMISSIONS.IOS.READ_EXTERNAL_STORAGE)]: 'Stockage',
    [sanitizePermission(PERMISSIONS.IOS.PHOTO_LIBRARY)]: 'Photos',
  },
  country_picker: {
    translation: 'fra',
  },
  image_picker: {
    loading_label: "Traitement de l'image ...",
    cropper_choose: 'Choisir',
    cropper_cancel: 'Annuler',
    from_camera: 'Depuis la caméra',
    from_gallery: 'Depuis la gallerie',
    choose_image: 'Choisir une image ...',
  },
  back_handler: {
    toast_close_app_android: 'Appuyer une seconde fois pour quitter',
  },
  app_update: {
    alert_ios_title: 'Mise à jour disponible',
    alert_ios_message:
      "Une nouvelle version de l'application est disponible sur l'App Store.",
    alert_upgrade_btn: 'Mettre à jour',
    alert_cancel_btn: 'Annuler',
  },
  network_alert: {
    text: 'Problème de connexion internet',
  },
  super_flat_list: {
    empty: 'Pas de donnée à afficher',
  },
  auth_home_screen: {
    pharmacist_access: 'ACCÈS PROFESSIONNEL',
    sampler_access: 'ACCÈS PRÉLEVEUR',
    login: "S'IDENTIFIER",
    register: 'CREER UN COMPTE',
  },
  auth_login_screen: {
    title: 'Connexion',
    email: 'Email',
    password: 'Mot de passe',
    forgot_password: 'Mot de passe oublié ?',
    submit: 'Se connecter',
    go_back: "Retourner sur la page d'accueil",
    alert_account_not_sampler:
      "L'application n'est actuellement disponible que pour les préleveurs",
    register: "Pas de compte ? S'inscrire maintenant !",
  },
  auth_forgot_password_screen: {
    title: 'MOT DE PASSE OUBLIÉ ?',
    info: 'Entrez l’adresse e-mail que vous avez utilisé lors de votre inscription et nous vous enverrons les instructions pour réinitialiser votre mot de passe.',
    email: 'Email',
    submit: 'Envoyer',
    go_back: 'Retourner sur la page de connexion',
    alert_mail_sent:
      'Un mail vous a été envoyé pour réinitialiser votre mot de passe',
  },
  auth_register_screen: {
    title: 'Inscription',
    firstname: 'Prénom',
    lastname: 'Nom',
    username: 'Pseudo',
    email: 'Email',
    password: 'Mot de passe',
    submit: "S'inscrire",
    go_back: 'Retourner sur la page de connexion',
    alert_mail_sent:
      'Un mail vous a été envoyé pour réinitialiser votre mot de passe',
  },
  intro_screen: {
    skip: 'Passer',
    done: 'Terminer',
    next: 'Suivant',
    prev: 'Précédent',
    slide_1_title: 'Inscrivez-vous',
    slide_1_text: 'Inscrivez-vous gratuitement en quelques cliques',
    slide_2_title: 'Remplissez vos disponibilités',
    slide_2_text:
      'Remplissez vos disponibilités et ainsi soyez maître de vos missions',
    slide_3_title: 'Effectuez vos missions',
    slide_3_text: 'Effectuez les missions selon les dates confirmées',
    slide_4_title: 'Recevez votre rémunération',
    slide_4_text: 'A la clé une bonne rémunération !',
  },
  file_picker: {
    choose_file: 'Choisir un fichier ...\n(image ou pdf, max 20 Mo)',
    alert_file_too_large: 'Le fichier est trop volumineux',
  },
  opening_screen: {
    submit: "J'ai compris et j'accepte",
  },
  news_screen: {
    title: 'Actus',
  },
  news_card: {
    more: 'Voir plus',
    less: 'Voir moins',
  },
  roads_screen: {
    title: 'Roads Trips',
  },
};
