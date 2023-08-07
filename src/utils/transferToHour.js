import dayjs from "dayjs";

export const transferToHour = (time) => {
  return dayjs(time, "YYYY-MM-DD HH:mm:ss").format("hh:mm A");
};

export const transferToYearMonthDay = (time) => {
  return dayjs(time, "YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DD");
};

export const transferToMonth = (time) => {
  return dayjs(time, "YYYY-MM-DD HH:mm:ss").format("MM");
};

export const transferToDay = (time) => {
  return dayjs(time, "YYYY-MM-DD HH:mm:ss").format("DD");
};

export const monthToEnglish = (monthNumber) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[Number(monthNumber) - 1];
};
