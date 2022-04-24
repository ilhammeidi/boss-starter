import React, { useState, useCallback } from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FileIcon from '@material-ui/icons/Description';
import ActionDelete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import CloudUpload from '@material-ui/icons/CloudUpload';
import 'boss-styles/vendors/react-dropzone/react-dropzone.css';
import isImage from './helpers/helpers.js';

const styles = theme => ({
  dropItem: {
    borderColor: theme.palette.divider,
    background: theme.palette.background.default,
    borderRadius: theme.rounded.medium,
    color: theme.palette.text.disabled,
    textAlign: 'center'
  },
  uploadIconSize: {
    display: 'inline-block',
    '& svg': {
      width: 72,
      height: 72,
      fill: theme.palette.secondary.main,
    }
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
    '& svg': {
      fill: theme.palette.common.white
    }
  },
  button: {
    marginTop: 20
  }
});

function MaterialDropZone(props) {
  const [openSnackBar, setOpenSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [files, setFiles] = useState(props.files); // eslint-disable-line
  const [acceptedFiles] = useState(props.acceptedFiles); // eslint-disable-line

  const {
    classes,
    showPreviews,
    maxSize,
    text,
    showButton,
    filesLimit,
    ...rest
  } = props;

  const onDrop = useCallback((filesVal) => {
    let oldFiles = files;
    const filesLimitVal = filesLimit || '3';
    oldFiles = oldFiles.concat(filesVal);
    if (oldFiles.length > filesLimit) {
      setOpenSnackbar(true);
      setErrorMessage(`Cannot upload more than ${filesLimitVal} items.`);
    } else {
      setFiles(oldFiles);
    }
  }, [files, filesLimit]);

  const onDropRejected = () => {
    setOpenSnackbar(true);
    setErrorMessage('File too big, max size is 3MB');
  };

  const handleRequestCloseSnackBar = () => {
    setOpenSnackbar(false);
  };

  const handleRemove = useCallback((file, fileIndex) => {
    // This is to prevent memory leaks.
    window.URL.revokeObjectURL(file.preview);

    setFiles(thisFiles => {
      const tempFiles = [...thisFiles];
      tempFiles.splice(fileIndex, 1);
      return tempFiles;
    });
  }, [files]);

  const fileSizeLimit = maxSize || 3000000;
  const DeleteBtn = ({ file, index }) => ( // eslint-disable-line
    <div className="middle">
      <IconButton onClick={() => handleRemove(file, index)}>
        <ActionDelete className="removeBtn" />
      </IconButton>
    </div>
  );

  DeleteBtn.propTypes = {
    file: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
  };

  const Previews = ({ filesArray }) => filesArray.map((file, index) => {
    const base64Img = URL.createObjectURL(file);
    if (isImage(file)) {
      return (
        <div key={index.toString()}>
          <div className="imageContainer col fileIconImg">
            <figure className="imgWrap"><img className="smallPreviewImg" src={base64Img} alt="preview" /></figure>
            <DeleteBtn file={file} index={index} />
          </div>
        </div>
      );
    }
    return (
      <div key={index.toString()}>
        <div className="imageContainer col fileIconImg">
          <FileIcon className="smallPreviewImg" alt="preview" />
          <DeleteBtn file={file} index={index} />
        </div>
      </div>
    );
  });

  Previews.propTypes = {
    filesArray: PropTypes.array.isRequired
  };

  let dropzoneRef;
  return (
    <div>
      <Dropzone
        accept={acceptedFiles.join(',')}
        onDrop={onDrop}
        onDropRejected={onDropRejected}
        acceptClassName="stripes"
        rejectClassName="rejectStripes"
        maxSize={fileSizeLimit}
        ref={(node) => { dropzoneRef = node; }}
        {...rest}
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className={classNames(classes.dropItem, 'dropZone')}>
            <div className="dropzoneTextStyle">
              <input {...getInputProps()} />
              <p className="dropzoneParagraph">{text}</p>
              <div className={classes.uploadIconSize}>
                <CloudUpload />
              </div>
            </div>
          </div>
        )}
        {/* end */}
      </Dropzone>
      {showButton && (
        <Button
          className={classes.button}
          fullWidth
          variant="contained"
          onClick={() => {
            dropzoneRef.open();
          }}
          color="secondary"
        >
          Click to upload file(s)
          <span className={classes.rightIcon}>
            <CloudUpload />
          </span>
        </Button>
      )}
      <div className="row preview">
        {showPreviews && <Previews filesArray={files} />}
      </div>
      <Snackbar
        open={openSnackBar}
        message={errorMessage}
        autoHideDuration={4000}
        onClose={handleRequestCloseSnackBar}
      />
    </div>
  );
}

MaterialDropZone.propTypes = {
  files: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
  acceptedFiles: PropTypes.array,
  showPreviews: PropTypes.bool.isRequired,
  showButton: PropTypes.bool,
  maxSize: PropTypes.number.isRequired,
  filesLimit: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
};

MaterialDropZone.defaultProps = {
  acceptedFiles: [],
  showButton: false,
};

export default withStyles(styles)(MaterialDropZone);
