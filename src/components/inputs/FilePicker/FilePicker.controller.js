import {useCallback} from 'react';
import DocumentPicker from 'react-native-document-picker';
import alertHelper from '../../../helpers/alertHelper';

const useController = ({onFileChanged, file, maxSize}) => {
  const selectFile = useCallback(async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images, DocumentPicker.types.pdf],
      });

      const selectedFile = res[0];

      if (maxSize && selectedFile.size > maxSize) {
        alertHelper.informFileTooLarge();
        return;
      }

      onFileChanged && onFileChanged(selectedFile);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
      }
    }
  }, [maxSize, onFileChanged]);

  return {file, selectFile};
};

export default useController;
