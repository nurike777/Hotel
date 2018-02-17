class script{
    function validate_form ( )
    {
            valid = true;

        else if ( document.form1.login.value == "" )
            {
                    alert ( "Введите логин" );
                    valid = false;
            }
        else if ( document.form1.password.value == "" )
            {
                    alert ( "Введите пароль" );
                    valid = false;
            }

            return valid;
    }
}           
