import React from 'react'
import classnames from 'classnames'

class util{
    formatNum(val, text){
        val = parseFloat(val);
        return <span className={classnames({
            red: val > 0,
            green: val < 0,
        })}>{val}{text}</span>
    }
    toJson = (text, splitStr= ',')=>{
        if(text){
            text = text.split(';')
            text = text.map(it=>{
                const its = it.split('=')[1];
                if(its)
                    return its.split('"')[1].split(splitStr);
            })
            text = text.filter(it=> it);
            return text;
        }
        return []
    }
}
export default new util();
