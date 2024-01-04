import React from "react";
import * as Enroll from "../../style/buildings/AptEnrollment.styled";
import Calendar from "react-calendar";
import dayjs from "dayjs";

interface Props {
  onChange: (value: Date) => void;
}

function CalendarComponent({ onChange }: Props) {
  return (
    <Enroll.Calendar>
      <Calendar
        onChange={(value) => onChange(value as Date)}
        formatDay={(locale, date) => dayjs(date).format("DD")}
        minDetail="month"
        maxDetail="year" // '월'을 넘어서 '년'까지 표시
        navigationLabel={undefined}
        showNeighboringMonth={false}
        className="mx-auto w-full text-sm border-b"
        tileClassName={({ date, view }) => {
          if (
            view === "month" &&
            (date.getDay() === 0 || date.getDay() === 6)
          ) {
            return "weekend-day";
          }
          return null;
        }}
        tileContent={({ date, view }) => {
          if (view === "year" && date.getDate() === 1) {
            return (
              <div className="month-indicator">
                {date.toLocaleString("default", {
                  month: "long",
                })}
              </div>
            );
          }
          return null;
        }}
      />
    </Enroll.Calendar>
  );
}

export default CalendarComponent;
