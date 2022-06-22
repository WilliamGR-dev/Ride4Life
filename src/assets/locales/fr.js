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
  session_screen: {
    title: 'SESSION',
    active_session: 'Session active',
    pharmacy: 'Professionnel : ',
    session_id: 'ID Session : ',
    sampler_id: 'ID Préleveur : ',
    number_of_patients: 'Nombre de patients : ',
    number_of_tested_patients: 'Nombre de patients testés : ',
    number_of_interpreted_patients: 'Nombre de patients interprétés : ',
    show_patient_form: 'Voir le formulaire patient',
    show_pharma_qrcode: 'Voir le QR code du professionnel',
    disable_form: 'Désactiver le formulaire',
    hold_session: 'Stopper le formulaire',
    unhold_session: 'Réactiver le formulaire',
    stop_session: 'Cloturer la session',
    info_end:
      'Si vous avez terminé votre session, vous pouvez stopper le formulaire pour commencer à désactiver la réception de nouveaux patients sur votre compte et céder la place à un autre préleveur. Attention vous devez tout de même finaliser vos dépistages en cours !',
    alert_confirm_hold_session:
      'Souhaitez-vous stopper le formulaire et ne plus recevoir de patients ?',
    alert_confirm_stop_session_0:
      'Souhaitez-vous cloturer totalement votre session et valider le dépistage de %{value} patient ?',
    alert_confirm_stop_session:
      'Souhaitez-vous cloturer totalement votre session et valider le dépistage de %{value} patient ?',
    alert_confirm_stop_session_plural:
      'Souhaitez-vous cloturer totalement votre session et valider le dépistage de %{value} patients ?',
    close_session: 'Cloturer la session',
    info_close_session:
      "Vous n'avez plus aucun patient à dépister. Vous pouvez désormais cloturer définitivement la session.",
    info_close_session_disabled:
      "Il reste des patient(s) à dépister pour cloturer totalement votre session.\n\nSi ces patients ne sont plus d'actualités (doublon, absent...), vous pouvez supprimer l'enregistrement dans l'onglet Sideps",
    info_close_no_app_session:
      'Une fois les prélèvements terminés, vous pouvez cloturer la session',
    unique_id: 'Numéro unique :',
    pending_session:
      'Veuillez attendre la validation du professionnel pour commencer la session',
  },
  session_scan_screen: {
    title: 'SESSION',
    scan_qrcode_info:
      'Scannez le QR Code avec votre appareil photo pour démarrer la session',
    fill_pharmacy_id_info:
      "Saisir l'ID du professionnel pour démarrer la session",
    fill_temp_id_info:
      "Saisir l'ID temporaire du professionnel pour démarrer la session",
    unique_id_info: "Pour les professionnels qui utilisent l'application",
    temp_id_info: "Pour les professionnels qui n'utilisent pas l'application",
    pharmacy_id: 'ID du professionnel',
    temp_id: 'ID temporaire du professionnel',
    submit: 'Envoyer',
    scan_qrcode_switch: 'Scanner le\nQR Code',
    fill_pharmacy_id_switch: "Saisir l'ID du professionnel",
    fill_temp_id_switch: "Saisir l'ID temporaire du professionnel",
    alert_invalid_qr_code: "Le QR code scanné n'est pas valide",
    declare_pharma_without_app:
      "Déclarer la session d'un professionnel\nqui n'utilise pas l'application",
    alert_sampler_picture_needed:
      'Merci de vous prendre en photo de face avec la devanture du professionnel en arrière plan',
    alert_sampler_picture_missing: 'La photo est obligatoire',
    scanning_session: 'Préparation de la session en cours ...',
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
  profile_screen: {
    legal_policy: 'Politique de confidentialité',
    legal_tos: "Conditions générales d'utilisation",
    history: 'Historique des sessions',
    update_password: 'Modifier mon mot de passe',
    update_profile: 'Modifier mes informations',
    billing: 'Ma facturation',
    dockets: 'Mes bordereaux',
    logout: 'Déconnexion',
    full_name: 'Nom complet',
    phone_number: 'Numéro de téléphone',
    email: 'Email',
    age: 'Age',
    field_of_studies: "Domaine d'étude",
    school_year: "Année d'étude",
    alert_confirm_logout: 'Souhaitez-vous vous déconnecter ?',
    show_documents: 'Voir mes documents',
  },
  sidep_form_screen: {
    title: 'Formulaire patient pour les tests antigéniques',
    nir: 'Numéro de sécurité sociale',
    first_name: 'Prénom',
    last_name: 'Nom de famille',
    birthdate: 'Date de naissance (jj/mm/aaaa)',
    birthdate_format: 'DD/MM/YYYY',
    birthdate_mask: '[00]/[00]/[0000]',
    gender: 'Sexe',
    is_medical: 'Professionnel de santé ?',
    address: 'Adresse',
    zip: 'Code postal',
    city: 'Ville',
    country: 'Pays',
    phone_number: 'Numéro de téléphone',
    email: 'Email',
    will_travel: 'Allez-vous voyager prochainement ?',
    has_travel: 'Avez-vous voyagé ces 14 derniers jours ?',
    accommodation: "Type d'hébergement",
    symptoms: 'Ressentez-vous des symptômes ?',
    submit: 'Envoyer',
    yes: 'Oui',
    no: 'Non',
    gender_1: 'Homme',
    gender_2: 'Femme',
    gender_3: 'Autre',
    accommodation_0: 'Je ne sais pas ou je ne souhaite pas répondre',
    accommodation_1: 'Dans un hébergement individuel privé',
    accommodation_2: "Dans une structure d'hébergement collectif",
    symptoms_2:
      "Je n'ai pas de symptômes mais je suis identifié comme cas contact",
    symptoms_3:
      "Je n'ai pas de symptômes mais je suis identifié dans un cluster (endroit à risque)",
    symptoms_4:
      "Je dois bientôt rentrer à l'hôpital, en EHPAD ou en établissement social",
    symptoms_5:
      'Je dois bientôt faire un déplacement pour lequel un test est exigé',
    symptoms_6:
      "Je n'ai pas de symptômes, mais je ne suis dans aucun des cas précédents",
    symptoms_7:
      "J'ai des symptômes (perte de l'odorat, perte du goût...) depuis moins de 7 jours",
    symptoms_8:
      "J'ai des symptômes (perte de l'odorat, perte du goût...) depuis plus de 7 jours",
    alert_wrong_data: 'Données incorrectes, merci de vérifier le formulaire',
    alert_duplicate: 'Ce patient existe déjà pour la session actuelle',
    alert_sidep_added: 'Le patient a été ajouté',
    alert_sidep_updated: 'Le patient a été modifié',
  },
  qr_code_scanner: {
    ask_camera_permission: "Autoriser l'accès\n à l'appareil photo",
  },
  sidep_card: {
    birthdate: 'Date de naissance :',
    phone_number: 'Numéro de téléphone :',
    email: 'Email :',
    absent: 'Absent',
    tested: 'Tester',
    diagnostic: 'Interpréter',
    cancel_diagnostic: "Annuler l'interprétation",
    bill: 'Marquer comme facturé',
    edit: 'Modifier',
    confirm_sidep_absent: 'Déclarer le patient absent ?',
    confirm_cancel_sidep_diagnostic: "Annuler l'interprétation du patient ?",
    not_paid_message:
      'Veuillez présenter le patient au professionnel avant de pouvoir le tester',
    not_interpretable_message:
      "Merci d'attendre jusqu'à %{value} pour pouvoir interpréter le test",
    result: 'Résultat :',
    result_0: 'Négatif',
    result_1: 'Positif',
    result_2: 'Indéterminé',
  },
  session_history_card: {
    schedule: 'Horaires',
    pharmacy: 'Professionnel',
    number_of_tests: 'Nombre de prélèvements',
    now: 'Maintenant',
  },
  sidep_screen: {
    no_session: "Vous n'avez pas de session active en cours",
    pharma_no_appli:
      "Le professionnel de la session en cours n'utilise pas l'application, les sideps ne sont pas gérés ici.",
    session_route: 'Session',
    sample_route: 'Prélevèments',
    diagnostic_route: 'Interprétations',
    history_route: 'Historique',
  },
  sidep_tab: {
    search: 'Rechercher ...',
    number_of_patients: 'Nombre de patients :',
  },
  session_history_screen: {
    title: 'Historique des sessions',
    number_of_sessions: 'Nombre total de sessions',
  },
  update_password_screen: {
    title: 'Modifier mon mot de passe',
    old_password: 'Ancien mot de passe',
    new_password: 'Nouveau mot de passe',
    confirm_new_password: 'Confirmation du mot de passe',
    submit: 'Modifier',
    define_new_password: 'Définir un nouveau mot de passe :',
    info:
      'Votre mot de passe doit contenir : \n' +
      '- au moins 8 caractères\n' +
      '- au moins 1 lettre majuscule\n' +
      '- au moins 1 lettre minuscule\n' +
      '- au moins 1 chiffre\n' +
      '- certains mot clés comme "abcd" sont interdits',
    alert_password_updated:
      'Le mot de passe a bien été modifié, merci de vous reconnecter',
  },
  sidep_test_modal: {
    material_brand_name: 'Marque du materiel',
    material_name: 'Nom du materiel',
    new_material: 'Nouveau materiel ?',
    new_material_brand: 'Marque',
    new_material_lot: 'Numéro de lot',
    new_material_exp: "Date d'expiration (jj/mm/aaaa)",
    new_material_exp_format: 'DD/MM/YYYY',
    new_material_exp_mask: '[00]/[00]/[0000]',
    submit: 'Envoyer',
    material_name_concat: 'MARQUE: ',
    material_lot_concat: 'LOT: ',
    material_exp_concat: 'EXP: ',
    alert_sidep_tested: 'Le patient a été testé',
  },
  sidep_diagnostic_modal: {
    alert_sidep_interpreted: 'Le patient a été interprété',
    result: 'Résultat du test',
    result_0: 'Négatif',
    result_1: 'Positif',
    result_2: 'Indéterminé',
    confirm_sidep_diagnostic: 'Confirmer le résultat %{value} du patient ?',
    take_picture: 'Prendre une photo du test',
  },
  sidep_bill_modal: {
    submit: 'Envoyer',
    choice: 'Status',
    choice_0: 'Schema vaccinal complet (pris en charge)',
    choice_1: 'Mineure (pris en charge)',
    choice_2: 'Cas contact déclaré par la CPAM (pris en charge)',
    choice_3: 'Prescription médicale (pris en charge)',
    choice_4: 'Certificat de rétablissement de -6 mois (pris en charge)',
    choice_5: 'Autre (non pris en charge)',
    alert_sidep_billed: 'Le patient a été marqué comme facturé',
  },
  planning_screen: {
    title: 'Planning',
    agenda_tab_title: 'Mes placements',
    availabilities_tab_title: 'Mes disponibilités',
  },
  planning_availabilities_tab: {
    availability_validated: 'Disponibilité validée !',
    am_and_hours: 'Matin : 8h - 13h30 *',
    pm_and_hours: 'Après-midi : 13h30 - 21h *',
    am: 'Matin',
    pm: 'Après-midi',
    am_hours: '8h - 13h30 *',
    pm_hours: '13h30 - 21h *',
    edit: 'Modifer',
    cancel: 'Annuler',
    submit: 'Enregistrer',
    alert_cant_remove_availability:
      "Vous ne pouvez plus supprimer cette disponibilité. En cas d'indisponibilité merci de contacter votre référent.\n\nVous avez jusqu'au jeudi 18h pour supprimer des disponibilitées sur la semaine suivante.",
    bottom_info:
      "* Une session pourra vous être proposée pendant ces créneaux en fonction des heures d'ouverture du professionnel.",
  },
  sidapp_chat: {
    input_placeholder: 'Écrivez un message ...',
  },
  inform_planning_screen: {
    title: 'Session du %{value}',
    subtitle: 'Merci de nous informer de votre présence',
    on_time_choice: "Je confirme que je serais présent et à l'heure",
    delayed_choice: "Je confirme que je serais présent mais j'aurais du retard",
    cancelled_choice: "Désolé, j'ai un empêchement, je ne serais pas présent",
    delayed_15mn: '15mn',
    delayed_30mn: '30mn',
    delayed_45mn: '45mn',
    delayed_1h: '1h et +',
    cancelled_info:
      'Un désistement vous pénalise sur les prochaines sessions qui vous seront proposées. Vous serez marqué comme non disponible sur ce créneau.',
    submit: 'Valider mon choix',
    am: 'matin',
    pm: 'après-midi',
    day: 'toute la journée',
    alert_planning_event_informed: 'Votre choix a été enregistré',
    confirm_cancel: 'Voulez-vous vous désister de cette session ?',
  },
  update_profile_screen: {
    title: 'Modifier mes informations',
    first_name: 'Prénom',
    last_name: 'Nom',
    address: 'Adresse',
    phone_number: 'Numéro de téléphone',
    city: 'Zone où je souhaite travailler',
    is_vehiculed: 'Je suis véhiculé',
    max_distance: 'Distance maximale pour travailler : %{value} km',
    submit: 'Enregistrer',
    alert_profile_updated: 'Vos informations ont été enregistrées',
    warning_incomplete:
      'Votre profil est incomplet, merci de saisir toutes les informations.',
    contact_to_update:
      "En cas d'erreur sur une information non modifiable, contactez votre référent pour effectuer la correction.",
    alert_profile_picture_missing: 'Vous devez prendre une photo de vous',
    profile_picture_info:
      'Une photo de vous est nécessaire, elle permet aux professionnels de vous identifier. La photo doit être prise de face, sans masque ou autre élément pouvant cacher votre visage, elle doit clairement vous identifier. La photo pourra être refusée par un membre de notre équipe. Une fois la photo validée, elle sera définitive.',
  },
  billing_screen: {
    title: 'Ma facturation',
    billing_tab_title: 'Ma facturation',
    bills_tab_title: 'Mes factures',
    billUpload_tab_title: 'Envoyer une facture',
  },
  billing_tab: {
    info_top:
      '* Le calcul du montant à facturer ne prend pas en compte : \n' +
      '● Les journées de travail payé à l’heure.\n' +
      '● Le nombre de test effectué chez les professionnels suivants : ',
    info_bottom: 'Les montants sont donc à titre indicatif.',
    info_pharma_item: '    - %{pharma} avec %{company}',
    month: 'Mois',
    year: 'Année',
    submit: 'Envoyer ma Facture',
    empty_list:
      "Vous n'avez pas fait de session ce mois-ci ou elles n'ont pas encore été gérées par nos services.",
    warning:
      'A partir du 14 mars 2022 la rémunération des préleveurs se fera par la CPAM et non plus par Pharnum X ou KDK, le calcul de la rémunération change et les données affichée sur cette page ne sont plus à prendre en compte. Vous pouvez retrouver toutes les informations sur la page suivante :',
    billing_revoked:
      'A partir du 14 mars, vous serez rémunéré par la CPAM, vous ne devez plus facturer KDK ou Pharnum X',
    total_tests_0:
      'Total : %{quantity} test soit %{amount}€ à facturer à Pharnum X',
    total_tests:
      'Total : %{quantity} test soit %{amount}€ à facturer à Pharnum X',
    total_tests_plural:
      'Total : %{quantity} tests soit %{amount}€ à facturer à Pharnum X',
  },
  billing_upload_tab: {
    subtitle:
      'Vous pouvez envoyer ici vos factures, elle seront traitées par nos équipes. Merci de leur donner des noms explicites (nom, mois)',
    submit: 'Envoyer',
    label_billing_name: 'Nom de la facture',
    label_document_file: 'Facture',
    billing_name: 'Nom de la facture',
    alert_document_uploaded: 'Le document a été enregistré',
  },
  billing_card: {
    session_item_0:
      '- %{pharma} le %{date} : %{quantity} test à %{price}€ = %{amount}€',
    session_item:
      '- %{pharma} le %{date} : %{quantity} test à %{price}€ le test, %{amount}€',
    session_item_plural:
      '- %{pharma} le %{date} : %{quantity} tests à %{price}€ = %{amount}€',
  },
  bill_card: {
    title: '%{name}',
    date_upload: 'Envoyé le : %{date}',
    status_title: 'Status : ',
    status_0: 'Facture en attente',
    status_1: 'Facture validée',
    status_2: 'Facture payée',
    status_3: 'Facture rejetée',
    comment: 'Commentaire : %{comment}',
    download: 'Télécharger le document',
  },
  close_session_screen: {
    title: 'Cloturer la session',
    nb_performed_tests: 'Nombre de prélèvements total',
    nb_positive_tests: 'Nombre de tests positifs',
    add_proof:
      "Preuve du nombre de prélèvements + POSITIFS (photo de l'ordinateur du professionnel avec le chiffre ou papier signé et tamponné par le professionnel avec le chiffre)",
    from_camera: 'Ajouter depuis la caméra',
    from_gallery: 'Depuis la gallerie',
    delete_proof: 'Supprimer',
    submit: 'Envoyer',
    alert_proof_required: 'Vous devez ajouter la preuve',
    alert_session_closed:
      'Les données ont été enregistrées et la session a été cloturée.',
  },
  book_planning_screen: {
    title:
      'Nouvelle opportunité le %{date} de %{startAt} à %{endAt}, lieux : %{pharma}',
    subtitle:
      'Le premier à répondre favorablement se verra affecter la session',
    yes_choice: 'Oui, je souhaite prendre la place',
    no_choice: 'Non, je ne suis pas disponible',
    submit: 'Valider mon choix',
    alert_event_booked:
      'Merci, la session vous a été attibuée, vous pouvez la retrouver dans votre agenda',
    alert_event_not_booked:
      "Merci, nous avons noté que vous n'étiez pas disponible pour cette session",
    alert_event_not_available:
      'Désolé, un autre préleveur a été plus rapide, la session a déjà été attibuée',
  },
  file_picker: {
    choose_file: 'Choisir un fichier ...\n(image ou pdf, max 20 Mo)',
    alert_file_too_large: 'Le fichier est trop volumineux',
  },
  onboarding_documents_screen: {
    title: 'Documents à fournir',
    subtitle:
      "La validation des documents commencera uniquement lorsque l'ensemble des documents obligatoires auront été envoyés.\n\nLes documents originaux seront vérifiés le jour de la formation, pensez à les amener avec vous.",
    id_file: "Pièce d'identité",
    vaccination_file: 'Schéma vaccinal',
    urssaf_file: 'Auto-entreprise',
    school_certificate_file: 'Certificat de scolarité / Diplôme / MLAC',
    submit: 'Envoyer',
    pending_document: 'Document en cours de validation ...',
    validated_document: 'Document validé',
    rejected_document: 'Document refusé :',
    alert_documents_missing:
      "Tous les documents obligatoires ne sont pas renseignés, pensez à tous les envoyer afin qu'ils soient traités.",
    alert_documents_uploaded: 'Les documents ont été enregistrés',
    id_info:
      '- Carte nationale d’identité (recto/verso)\n' +
      '- Passport (double page avec la photo)',
    vaccination_info:
      "Photo ou capture d'écran du pass sanitaire avec QR code, nom et prénom",
    urssaf_info:
      '- Si vous avez une auto-entreprise :\n➔ Avis SIRENE ou Kbis\n\n' +
      "- Si vous n'avez pas d'auto-entreprise : vous pouvez la créer avec notre partenaire GetBiz (informations en bas de page)\n➔ Mail de confirmation GetBiz",
    school_certificate_info:
      '- Si vous êtes étudiant santé (médecine, pharmacie, odontologie, kinésithérapie, infirmier, maïeutique) :\n➔ Certificat de scolarité\n\n' +
      '- Si vous êtes diplômé de santé (médecine, pharmacie, odontologie, kinésithérapie, infirmier, maïeutique, manipulateur radio, aide soignant, ambulancier, auxiliaire de périculture, préparateur en pharmacie, technicien de laboratoire, pompier) :\n➔ Diplôme français ou équivalence pour les étrangers\n\n' +
      '- Si vous avez fait la formation MLAC :\n➔ Attestation de formation pratique',
    getbiz_info:
      "Si vous n'avez pas d'auto-entreprise, vous pouvez la créer simplement avec notre partenaire GetBiz, les frais sont gratuis en passant par ce lien :\n",
  },
  onboarding_training_screen: {
    title: 'Choisir une formation',
    submit: 'Valider ma formation',
    alert_training_booked: 'Votre choix de formation a bien été pris en compte',
    info: 'Une formation est nécéssaire pour vous expliquer le fonctionnement de vos futures missions et les outils utilisés, elle vous permet également de vous former au prélèvement. Cette formation est obligatoire (même si vous avez déjà été formé au prélèvement).',
    alert_training_full:
      "Cette formation est désormais complète, merci d'en choisir une autre.",
    empty_list: "Aucune formation n'est disponible actuellement",
  },
  onboarding_training_card: {
    training_full: 'Plus de place disponible',
  },
  onboarding_home_screen: {
    title: 'Onboarding',
    register_step: 'Inscription',
    personal_information_step: 'Informations personnelles',
    documents_step: 'Documents administratifs',
    training_step: 'Formation obligatoire',
    fill_information: 'Renseigner mes informations',
    send_documents: 'Voir et envoyer mes documents',
    training_documents_info: 'Pensez à amener vos documents originaux !',
    change_training: 'Changer ma formation',
    choose_training: 'Choisir ma formation',
    legal_policy: 'Politique de confidentialité',
    legal_tos: "Conditions générales d'utilisation",
    update_password: 'Modifier mon mot de passe',
    logout: 'Déconnexion',
  },
  user_documents_screen: {
    title: 'Mes documents',
  },
  user_document_card: {
    see_document: 'Voir le document',
    'document_Personal ID': "Pièce d'identité",
    'document_Vaccine schema': 'Schéma vaccinal',
    'document_URSSAF auto-entrepreneur certificate': 'Auto-entreprise',
    'document_Study certificate': 'Certificat de scolarité / Diplôme / MLAC',
  },
  chat_creation_card: {
    type_sampler: 'Préleveur',
    type_pharma: 'Professionnel',
    type_admin: 'Administrateur',
  },
  chat_home_screen: {
    search: 'Rechercher ...',
  },
  chat_creation_screen: {
    title: 'Nouvelle conversation',
    topic: 'Sujet de votre demande',
    message: 'Message',
    tags: 'Tags :',
    tagInfo:
      'Les tags permettent de rediriger votre demande vers la bonne personne, choisissez les judicieusement pour un traitement efficace. Vous pouvez en sélectionner plusieurs, au moins un est requis.',
    submit: 'Envoyer la demande',
    info: "Vous avez un problème, une question, une remarque ? Vous pouvez créer un fil de discussion ici, un membre de notre équipe prendra en charge votre demande dès que possible. Pensez à activer les notifications de l'applications pour recevoir les réponses.",
  },
  chat_helper: {
    message_create: '%{name} a démarré la conversation',
    message_create_me: 'Vous avez démarré la conversation',
    message_image: '%{name} a envoyé une image',
    message_image_me: 'Vous avez envoyé une image',
    join: '%{name} a rejoint la conversation',
    join_me: 'Vous avez rejoint la conversation',
    archive: '%{name} a archivé la conversation',
    archive_me: 'Vous avez archivé la conversation',
  },
  opening_screen: {
    submit: "J'ai compris et j'accepte",
  },
  dockets_screen: {
    sent_tab_title: 'Envoyés',
    pending_tab_title: 'En attente',
    title: 'Mes bordereaux',
    edit_info: 'Modifier mes informations',
    info: "Afin de profiter de la génération et de l'envoi automatique des bordereaux à la CPAM par nos services, vous devez au préalable renseigner certaines informations.",
  },
  signature_canvas: {
    label: 'Signer dans le cadre ci-dessous :',
    submit: 'Valider',
    clear: 'Effacer',
    cancel: 'Annuler',
  },
  docket_profile_screen: {
    title: 'Mes informations de bordereau',
    alert_updated: 'Vos données ont été mise à jour',
    nir: 'Numéro de sécurité sociale',
    cpam_email: "Email d'envoi à la CPAM",
    job: 'Profession',
    submit: 'Envoyer',
    empty_signature: "Vous n'avez pas encore de signature",
  },
  docket_card: {
    title: '%{pharma} le %{date}',
    download: 'Télécharger le document',
    pdf: 'PDF',
    xlsx: 'XLSX',
    sign_send: 'Signer et envoyer à la CPAM',
    confirm_send: "Voulez-vous signer ce bordereau et l'envoyer à la CPAM ?",
    alert_send: 'Le bordereau a été signé et envoyé à la CPAM',
  },
  planning_agenda_card: {
    cancel: 'Je souhaite annuler',
    confirm_cancel: 'Voulez-vous annuler ce placement ?',
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
