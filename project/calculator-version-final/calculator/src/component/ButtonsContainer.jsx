import style from "./ButtonsContainer.module.css"

const ButtonsContainer = ({onButtonClick}) => {

    const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.']

    return <div className={style.buttonsContainer}>

        {buttonNames.map((buttonNames) =>
            <button className={style.button} onClick={() => onButtonClick(buttonNames)}>{buttonNames}</button>
        )}
    </div>
}

export default ButtonsContainer