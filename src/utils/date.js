import { Temporal, Intl, toTemporalInstant } from '@js-temporal/polyfill'
Date.prototype.toTemporalInstant = toTemporalInstant


function dateNow(){
    let date_day = Temporal.Now.zonedDateTimeISO('Europe/Moscow').day
    let date_hour =Temporal.Now.zonedDateTimeISO('Europe/Moscow').hour
    
    return [date_day,date_hour]
}



export {dateNow}
