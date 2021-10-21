import React, {useState, useEffect} from 'react';



export const useValidation = (value, validations) => {

	//Валидации
	
	const [isEmpty, setIsEmpty] = useState(true);
	const [isMinLengthError, setIsMinLengthError] = useState(false);
	const [inputValid, setInputValid] = useState(false);

	useEffect(() => {
		for (const validation in validations) {
			switch (validation) {
				case 'minLength':
					value.length < validations[validation] ? setIsMinLengthError(true) : setIsMinLengthError(false);
					break;
				case 'isEmpty':
					value ? setIsEmpty(false) : setIsEmpty(true);
					break;
			}	
		}
	}, [value])

	useEffect(() => {
		if (isMinLengthError || isEmpty) {
			setInputValid(false);
		}
		else {
			setInputValid(true);
		}
		
	}, [isEmpty, isMinLengthError])

	return {
		isEmpty,
		isMinLengthError,
		inputValid
	}
}