const Validation = (type: string, value: string, validationFlg: React.Dispatch<React.SetStateAction<boolean>>) => {
    switch (type) {
        case 'required':
            if (value) {
                validationFlg(false);
            } else {
                validationFlg(true);
            }
            break;
    }
}

export default Validation;