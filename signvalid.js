function checkEmpty(data){
    if(data.length==0){
        return true;
    }
    else{
        return false;
    }
    }
    function checkLength(data){
        if(data.length<6){
            return true;
        }
        else{
            return false;
        }
    }
    function checkCombo(data){
        if(data=="default"){
            return true;
        }
        else{
            return false;
        }
    }
    function chk_rdCheck(data)
    
    {
        flag=0
        for(i=0;i<data.length;i++)
            {
            if(data[i].checked)
                {
                
                flag=1;
                break;
                }
                    
            }
        if(flag==0)
            return true
            else
                return false
    
    
    }