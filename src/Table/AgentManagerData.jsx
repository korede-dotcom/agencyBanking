// import axios from "axios";

// let AgentManagerData = [
// {
//   Agent_name: "James Adekola",
//   Agent_ID: "N123456",
//   Phone_Number: "406-633-2320",
//   Business_Name: "TM30 GLOBAL INTERNATIONAL",
//   Email_Address: "CUSTOMER@TM30.COM",
//   State: "LAGOS STATE",
//   Status: true,
// },
// {
//   Agent_name: "Shola Adeniyi",
//   Agent_ID: "N123456",
//   Phone_Number: "490-807-5271",
//   Business_Name: "TM30 GLOBAL INTERNATIONAL",
//   Email_Address: "CUSTOMER@TM30.COM",
//   State: "LAGOS STATE",
//   Status: false,
// },
// {
//   Agent_name: "James Adekola",
//   Agent_ID: "N123456",
//   Phone_Number: "406-633-2320",
//   Business_Name: "TM30 GLOBAL INTERNATIONAL",
//   Email_Address: "CUSTOMER@TM30.COM",
//   State: "LAGOS STATE",
//   Status: true,
// },
// {
//   Agent_name: "Shola Adeniyi",
//   Agent_ID: "N123456",
//   Phone_Number: "490-807-5271",
//   Business_Name: "TM30 GLOBAL INTERNATIONAL",
//   Email_Address: "CUSTOMER@TM30.COM",
//   State: "LAGOS STATE",
//   Status: false,
// },
// {
//   Agent_name: "James Adekola",
//   Agent_ID: "N123456",
//   Phone_Number: "406-633-2320",
//   Business_Name: "TM30 GLOBAL INTERNATIONAL",
//   Email_Address: "CUSTOMER@TM30.COM",
//   State: "LAGOS STATE",
//   Status: true,
// },
// {
//   Agent_name: "Shola Adeniyi",
//   Agent_ID: "N123456",
//   Phone_Number: "490-807-5271",
//   Business_Name: "TM30 GLOBAL INTERNATIONAL",
//   Email_Address: "CUSTOMER@TM30.COM",
//   State: "LAGOS STATE",
//   Status: false,
// },
// {
//   Agent_name: "James Adekola",
//   Agent_ID: "N123456",
//   Phone_Number: "406-633-2320",
//   Business_Name: "TM30 GLOBAL INTERNATIONAL",
//   Email_Address: "CUSTOMER@TM30.COM",
//   State: "LAGOS STATE",
//   Status: true,
// },
// {
//   Agent_name: "Shola Adeniyi",
//   Agent_ID: "N123456",
//   Phone_Number: "490-807-5271",
//   Business_Name: "TM30 GLOBAL INTERNATIONAL",
//   Email_Address: "CUSTOMER@TM30.COM",
//   State: "LAGOS STATE",
//   Status: false,
// },
// {
//   Agent_name: "James Adekola",
//   Agent_ID: "N123456",
//   Phone_Number: "406-633-2320",
//   Business_Name: "TM30 GLOBAL INTERNATIONAL",
//   Email_Address: "CUSTOMER@TM30.COM",
//   State: "LAGOS STATE",
//   Status: true,
// },
// {
//   Agent_name: "Shola Adeniyi",
//   Agent_ID: "N123456",
//   Phone_Number: "490-807-5271",
//   Business_Name: "TM30 GLOBAL INTERNATIONAL",
//   Email_Address: "CUSTOMER@TM30.COM",
//   State: "LAGOS STATE",
//   Status: false,
// },
// {
//   Agent_name: "James Adekola",
//   Agent_ID: "N123456",
//   Phone_Number: "406-633-2320",
//   Business_Name: "TM30 GLOBAL INTERNATIONAL",
//   Email_Address: "CUSTOMER@TM30.COM",
//   State: "LAGOS STATE",
//   Status: true,
// },
// {
//   Agent_name: "Shola Adeniyi",
//   Agent_ID: "N123456",
//   Phone_Number: "490-807-5271",
//   Business_Name: "TM30 GLOBAL INTERNATIONAL",
//   Email_Address: "CUSTOMER@TM30.COM",
//   State: "LAGOS STATE",
//   Status: false,
// },
// {
//   Agent_name: "James Adekola",
//   Agent_ID: "N123456",
//   Phone_Number: "406-633-2320",
//   Business_Name: "TM30 GLOBAL INTERNATIONAL",
//   Email_Address: "CUSTOMER@TM30.COM",
//   State: "LAGOS STATE",
//   Status: true,
// },
// {
//   Agent_name: "Shola Adeniyi",
//   Agent_ID: "N123456",
//   Phone_Number: "490-807-5271",
//   Business_Name: "TM30 GLOBAL INTERNATIONAL",
//   Email_Address: "CUSTOMER@TM30.COM",
//   State: "LAGOS STATE",
//   Status: false,
// },
// ];
// let userDetails = JSON.parse(localStorage.getItem("userDetails"));

// const config = {
//   headers: {
//     Authorization: `bearer ${userDetails?.data?.token}`,
//   },
// };
// // console.log(userDetails?.data?.token);

// export const fetchManagers = async () => {
//   await axios
//     .get("http://89.38.135.41:9800/user/agentmanagers", config)
//     .then((res) => {
//       console.log(res.data.agentManger);
//       AgentManagerData = res.data.agentManger;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// export default AgentManagerData;
