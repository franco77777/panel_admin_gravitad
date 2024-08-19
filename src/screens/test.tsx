import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Test = () => {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <div id="datepicker2" className="text-white date relative">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date as Date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    </div>
  )
}
export default Test
