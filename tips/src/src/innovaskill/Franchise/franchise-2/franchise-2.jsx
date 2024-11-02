import "./franchise-2.css";
import collage from './images/COLLEGE MoU.png';
import company from './images/PLACEMENT.png';
import form from './images/41.png';
import { useEffect, useState } from "react";
// import axios from "axios";
import AXX from '../../routes/axios';
import { toast } from "react-toastify";


function Franchise2(){

    return(<>

        <div className="franschise-collage-main container-fluid">

            <div className="franchise-collage-body row" >

                <div className="col-12 d-flex flex-column justify-content-center align-items-center my-3">
 
                    <div className="franchise-collage-head col-11 my-2">
                        <h1> Collage MoU </h1>
                    </div>

                    <div className="franchise-collage-img  col-10">
                        <img src={collage} className="img-fluid"/>
                    </div>

                </div>

            </div>

            <div className="franchise-collage-body row" >

                <div className="col-12 d-flex flex-column justify-content-center align-items-center my-3 ">
 
                    <div className="franchise-collage-head col-11 my-2">
                        <h1> Placement Opportunity </h1>
                    </div>

                    <div className="franchise-collage-img col-10 ">
                        <img src={company} className="img-fluid"/>
                    </div>

                </div>

            </div>
        </div>

<FormDiv/>
</>)
}
export default Franchise2;


function FormDiv(){

    const [state , setState] = useState('');

    const [Districtss , setDistrictss] = useState(["select the states"]);

    const [ colabLocation , setColabLocation ] = useState({
        colabstate:state,
        colabdistrict:"",
        colabcity:""
    })
    const [ colabData , setColabData ] = useState({
        colabname:"",
        colabstudies:"",
        colabnumber:"",
        colabaltnumber:"",
        colabprofession:"",
        colabemail:"",
        colablocation:{
            colabcity:"",
            colabdistrict:"",
            colabstate:""
        }
    });

    const selectDis = (sta) => {
        setDistrictss( locations.find( (f) => f.states === sta.target.value ).districts );
        setColabLocation({...colabLocation , [sta.target.name] : sta.target.value });
    }

    const storingValue = (e) => {
        setColabData({ ...colabData , [ e.target.name ] : e.target.value });
    }

    const storingLoc = (e) => {
        setColabLocation({...colabLocation , [e.target.name] : e.target.value });
    }

    const checkingError = (d) =>{

        if( d == colabData ){

            if(d.colabname == "" || d.colabnumber == "" || d.colabaltnumber == "" || d.colabemail == "" || d.colabprofession == "" || d.colabstudies == "" ){
                alert('fill all the fields')
            }

            else if(d.colabnumber.length != 10){
                alert('enter valid number')
            }

            else if(d.colabaltnumber.length != 10){
                alert('enter valid alternate number')
            }

            else if( d.colabnumber == d.colabaltnumber ){
                alert(" both are same enter alternate number")
            }

        }

        else if(d == colabLocation ){

                if(d.colabState == ""){
                    alert('select state');
                }

                else if(d.colabDistrict == "" ){
                    alert('select district');
                }

                else if(d.colabCity == ""){
                    alert('enter city')
                }

        }

    }

    const submitForm = (e) =>{
        e.preventDefault();
        checkingError(colabData);
        checkingError(colabLocation);

        if(colabData.colabname !== ""&& colabData.colabaltnumber != colabData.colabnumber && colabData.colabnumber.length == 10 && colabData.colabaltnumber.length == 10 && colabData.colabstudies !== "" && colabData.colabemail !== "" && colabData.colabprofession !== "" && colabLocation.colabcity !== "" && colabLocation.colabdistrict !== "" && colabLocation.colabstate !== ""){
        setColabData({
            colabname:"",
            colabstudies:"",
            colabnumber:"",
            colabaltnumber:"",
            colabprofession:"",
            colabemail:"",
        })
        setColabLocation({
            colabcity:"",
            colabdistrict:"",
            colabstate:""
            }
        )

        AXX.post('franchiseForm/postform', colabData)
        .then((res)=>{
            // console.log(res.data);
            toast.success(res.data.message)
        })
        .catch((err)=>{
          toast.error(err.response.data.message)
        })
   
        }

    }

    useEffect(()=>{
        setColabData({...colabData , "colablocation" : {...colabLocation} });
    },[colabLocation])

    const locations = [
        {
          states: "Andhra Pradesh",
          districts: [
            "Anantapur",
            "Chittoor",
            "East Godavari",
            "Guntur",
            "Krishna",
            "Kurnool",
            "Nellore",
            "Prakasam",
            "Srikakulam",
            "Visakhapatnam",
            "Vizianagaram",
            "West Godavari",
            "YSR Kadapa"
          ]
        },
        {
          states: "Arunachal Pradesh",
          districts: [
            "Tawang",
            "West Kameng",
            "East Kameng",
            "Papum Pare",
            "Kurung Kumey",
            "Kra Daadi",
            "Lower Subansiri",
            "Upper Subansiri",
            "West Siang",
            "East Siang",
            "Siang",
            "Upper Siang",
            "Lower Siang",
            "Lower Dibang Valley",
            "Dibang Valley",
            "Anjaw",
            "Lohit",
            "Namsai",
            "Changlang",
            "Tirap",
            "Longding"
          ]
        },
        {
          states: "Assam",
          districts: [
            "Baksa",
            "Barpeta",
            "Biswanath",
            "Bongaigaon",
            "Cachar",
            "Charaideo",
            "Chirang",
            "Darrang",
            "Dhemaji",
            "Dhubri",
            "Dibrugarh",
            "Goalpara",
            "Golaghat",
            "Hailakandi",
            "Hojai",
            "Jorhat",
            "Kamrup Metropolitan",
            "Kamrup",
            "Karbi Anglong",
            "Karimganj",
            "Kokrajhar",
            "Lakhimpur",
            "Majuli",
            "Morigaon",
            "Nagaon",
            "Nalbari",
            "Dima Hasao",
            "Sivasagar",
            "Sonitpur",
            "South Salmara-Mankachar",
            "Tinsukia",
            "Udalguri",
            "West Karbi Anglong"
          ]
        },
        {
          states: "Bihar",
          districts: [
            "Araria",
            "Arwal",
            "Aurangabad",
            "Banka",
            "Begusarai",
            "Bhagalpur",
            "Bhojpur",
            "Buxar",
            "Darbhanga",
            "East Champaran (Motihari)",
            "Gaya",
            "Gopalganj",
            "Jamui",
            "Jehanabad",
            "Kaimur (Bhabua)",
            "Katihar",
            "Khagaria",
            "Kishanganj",
            "Lakhisarai",
            "Madhepura",
            "Madhubani",
            "Munger (Monghyr)",
            "Muzaffarpur",
            "Nalanda",
            "Nawada",
            "Patna",
            "Purnia (Purnea)",
            "Rohtas",
            "Saharsa",
            "Samastipur",
            "Saran",
            "Sheikhpura",
            "Sheohar",
            "Sitamarhi",
            "Siwan",
            "Supaul",
            "Vaishali",
            "West Champaran"
          ]
        },
        {
          states: "Chandigarh (UT)",
          districts: [
            "Chandigarh"
          ]
        },
        {
          states: "Chhattisgarh",
          districts: [
            "Balod",
            "Baloda Bazar",
            "Balrampur",
            "Bastar",
            "Bemetara",
            "Bijapur",
            "Bilaspur",
            "Dantewada (South Bastar)",
            "Dhamtari",
            "Durg",
            "Gariyaband",
            "Janjgir-Champa",
            "Jashpur",
            "Kabirdham (Kawardha)",
            "Kanker (North Bastar)",
            "Kondagaon",
            "Korba",
            "Korea (Koriya)",
            "Mahasamund",
            "Mungeli",
            "Narayanpur",
            "Raigarh",
            "Raipur",
            "Rajnandgaon",
            "Sukma",
            "Surajpur  ",
            "Surguja"
          ]
        },
        {
          states: "Dadra and Nagar Haveli (UT)",
          districts: [
            "Dadra & Nagar Haveli"
          ]
        },
        {
          states: "Daman and Diu (UT)",
          districts: [
            "Daman",
            "Diu"
          ]
        },
        {
          states: "Delhi (NCT)",
          districts: [
            "Central Delhi",
            "East Delhi",
            "New Delhi",
            "North Delhi",
            "North East  Delhi",
            "North West  Delhi",
            "Shahdara",
            "South Delhi",
            "South East Delhi",
            "South West  Delhi",
            "West Delhi"
          ]
        },
        {
          states: "Goa",
          districts: [
            "North Goa",
            "South Goa"
          ]
        },
        {
          states: "Gujarat",
          districts: [
            "Ahmedabad",
            "Amreli",
            "Anand",
            "Aravalli",
            "Banaskantha (Palanpur)",
            "Bharuch",
            "Bhavnagar",
            "Botad",
            "Chhota Udepur",
            "Dahod",
            "Dangs (Ahwa)",
            "Devbhoomi Dwarka",
            "Gandhinagar",
            "Gir Somnath",
            "Jamnagar",
            "Junagadh",
            "Kachchh",
            "Kheda (Nadiad)",
            "Mahisagar",
            "Mehsana",
            "Morbi",
            "Narmada (Rajpipla)",
            "Navsari",
            "Panchmahal (Godhra)",
            "Patan",
            "Porbandar",
            "Rajkot",
            "Sabarkantha (Himmatnagar)",
            "Surat",
            "Surendranagar",
            "Tapi (Vyara)",
            "Vadodara",
            "Valsad"
          ]
        },
        {
          states: "Haryana",
          districts: [
            "Ambala",
            "Bhiwani",
            "Charkhi Dadri",
            "Faridabad",
            "Fatehabad",
            "Gurgaon",
            "Hisar",
            "Jhajjar",
            "Jind",
            "Kaithal",
            "Karnal",
            "Kurukshetra",
            "Mahendragarh",
            "Mewat",
            "Palwal",
            "Panchkula",
            "Panipat",
            "Rewari",
            "Rohtak",
            "Sirsa",
            "Sonipat",
            "Yamunanagar"
          ]
        },
        {
          states: "Himachal Pradesh",
          districts: [
            "Bilaspur",
            "Chamba",
            "Hamirpur",
            "Kangra",
            "Kinnaur",
            "Kullu",
            "Lahaul &amp; Spiti",
            "Mandi",
            "Shimla",
            "Sirmaur (Sirmour)",
            "Solan",
            "Una"
          ]
        },
        {
          states: "Jammu and Kashmir",
          districts: [
            "Anantnag",
            "Bandipore",
            "Baramulla",
            "Budgam",
            "Doda",
            "Ganderbal",
            "Jammu",
            "Kargil",
            "Kathua",
            "Kishtwar",
            "Kulgam",
            "Kupwara",
            "Leh",
            "Poonch",
            "Pulwama",
            "Rajouri",
            "Ramban",
            "Reasi",
            "Samba",
            "Shopian",
            "Srinagar",
            "Udhampur"
          ]
        },
        {
          states: "Jharkhand",
          districts: [
            "Bokaro",
            "Chatra",
            "Deoghar",
            "Dhanbad",
            "Dumka",
            "East Singhbhum",
            "Garhwa",
            "Giridih",
            "Godda",
            "Gumla",
            "Hazaribag",
            "Jamtara",
            "Khunti",
            "Koderma",
            "Latehar",
            "Lohardaga",
            "Pakur",
            "Palamu",
            "Ramgarh",
            "Ranchi",
            "Sahibganj",
            "Seraikela-Kharsawan",
            "Simdega",
            "West Singhbhum"
          ]
        },
        {
          states: "Karnataka",
          districts: [
            "Bagalkot",
            "Ballari (Bellary)",
            "Belagavi (Belgaum)",
            "Bengaluru (Bangalore) Rural",
            "Bengaluru (Bangalore) Urban",
            "Bidar",
            "Chamarajanagar",
            "Chikballapur",
            "Chikkamagaluru (Chikmagalur)",
            "Chitradurga",
            "Dakshina Kannada",
            "Davangere",
            "Dharwad",
            "Gadag",
            "Hassan",
            "Haveri",
            "Kalaburagi (Gulbarga)",
            "Kodagu",
            "Kolar",
            "Koppal",
            "Mandya",
            "Mysuru (Mysore)",
            "Raichur",
            "Ramanagara",
            "Shivamogga (Shimoga)",
            "Tumakuru (Tumkur)",
            "Udupi",
            "Uttara Kannada (Karwar)",
            "Vijayapura (Bijapur)",
            "Yadgir"
          ]
        },
        {
          states: "Kerala",
          districts: [
            "Alappuzha",
            "Ernakulam",
            "Idukki",
            "Kannur",
            "Kasaragod",
            "Kollam",
            "Kottayam",
            "Kozhikode",
            "Malappuram",
            "Palakkad",
            "Pathanamthitta",
            "Thiruvananthapuram",
            "Thrissur",
            "Wayanad"
          ]
        },
        {
          states: "Lakshadweep (UT)",
          districts: [
            "Agatti",
            "Amini",
            "Androth",
            "Bithra",
            "Chethlath",
            "Kavaratti",
            "Kadmath",
            "Kalpeni",
            "Kilthan",
            "Minicoy"
          ]
        },
        {
          states: "Madhya Pradesh",
          districts: [
            "Agar Malwa",
            "Alirajpur",
            "Anuppur",
            "Ashoknagar",
            "Balaghat",
            "Barwani",
            "Betul",
            "Bhind",
            "Bhopal",
            "Burhanpur",
            "Chhatarpur",
            "Chhindwara",
            "Damoh",
            "Datia",
            "Dewas",
            "Dhar",
            "Dindori",
            "Guna",
            "Gwalior",
            "Harda",
            "Hoshangabad",
            "Indore",
            "Jabalpur",
            "Jhabua",
            "Katni",
            "Khandwa",
            "Khargone",
            "Mandla",
            "Mandsaur",
            "Morena",
            "Narsinghpur",
            "Neemuch",
            "Panna",
            "Raisen",
            "Rajgarh",
            "Ratlam",
            "Rewa",
            "Sagar",
            "Satna",
            "Sehore",
            "Seoni",
            "Shahdol",
            "Shajapur",
            "Sheopur",
            "Shivpuri",
            "Sidhi",
            "Singrauli",
            "Tikamgarh",
            "Ujjain",
            "Umaria",
            "Vidisha"
          ]
        },
        {
          states: "Maharashtra",
          districts: [
            "Ahmednagar",
            "Akola",
            "Amravati",
            "Aurangabad",
            "Beed",
            "Bhandara",
            "Buldhana",
            "Chandrapur",
            "Dhule",
            "Gadchiroli",
            "Gondia",
            "Hingoli",
            "Jalgaon",
            "Jalna",
            "Kolhapur",
            "Latur",
            "Mumbai City",
            "Mumbai suburban",
            "Nagpur",
            "Nanded",
            "Nandurbar",
            "Nashik",
            "Osmanabad",
            "Palghar",
            "Parbhani",
            "Pune",
            "Raigad",
            "Ratnagiri",
            "Sangli",
            "Satara",
            "Sindhudurg",
            "Solapur",
            "Thane",
            "Wardha",
            "Washim",
            "Yavatmal"
          ]
        },
        {
          states: "Manipur",
          districts: [
            "Bishnupur",
            "Chandel",
            "Churachandpur",
            "Imphal East",
            "Imphal West",
            "Jiribam",
            "Kakching",
            "Kamjong",
            "Kangpokpi",
            "Noney",
            "Pherzawl",
            "Senapati",
            "Tamenglong",
            "Tengnoupal",
            "Thoubal",
            "Ukhrul"
          ]
        },
        {
          states: "Meghalaya",
          districts: [
            "East Garo Hills",
            "East Jaintia Hills",
            "East Khasi Hills",
            "North Garo Hills",
            "Ri Bhoi",
            "South Garo Hills",
            "South West Garo Hills ",
            "South West Khasi Hills",
            "West Garo Hills",
            "West Jaintia Hills",
            "West Khasi Hills"
          ]
        },
        {
          states: "Mizoram",
          districts: [
            "Aizawl",
            "Champhai",
            "Kolasib",
            "Lawngtlai",
            "Lunglei",
            "Mamit",
            "Saiha",
            "Serchhip"
          ]
        },
        {
          states: "Nagaland",
          districts: [
            "Dimapur",
            "Kiphire",
            "Kohima",
            "Longleng",
            "Mokokchung",
            "Mon",
            "Peren",
            "Phek",
            "Tuensang",
            "Wokha",
            "Zunheboto"
          ]
        },
        {
          states: "Odisha",
          districts: [
            "Angul",
            "Balangir",
            "Balasore",
            "Bargarh",
            "Bhadrak",
            "Boudh",
            "Cuttack",
            "Deogarh",
            "Dhenkanal",
            "Gajapati",
            "Ganjam",
            "Jagatsinghapur",
            "Jajpur",
            "Jharsuguda",
            "Kalahandi",
            "Kandhamal",
            "Kendrapara",
            "Kendujhar (Keonjhar)",
            "Khordha",
            "Koraput",
            "Malkangiri",
            "Mayurbhanj",
            "Nabarangpur",
            "Nayagarh",
            "Nuapada",
            "Puri",
            "Rayagada",
            "Sambalpur",
            "Subarnapur (Sonepur)",
            "Sundargarh"
          ]
        },
        {
          states: "Puducherry (UT)",
          districts: [
            "Karaikal",
            "Mahe",
            "Puducherry",
            "Yanam"
          ]
        },
        {
          states: "Punjab",
          districts: [
            "Amritsar",
            "Barnala",
            "Bathinda",
            "Faridkot",
            "Fatehgarh Sahib",
            "Fazilka",
            "Ferozepur",
            "Gurdaspur",
            "Hoshiarpur",
            "Jalandhar",
            "Kapurthala",
            "Ludhiana",
            "Mansa",
            "Moga",
            "Muktsar",
            "Nawanshahr (Shahid Bhagat Singh Nagar)",
            "Pathankot",
            "Patiala",
            "Rupnagar",
            "Sahibzada Ajit Singh Nagar (Mohali)",
            "Sangrur",
            "Tarn Taran"
          ]
        },
        {
          states: "Rajasthan",
          districts: [
            "Ajmer",
            "Alwar",
            "Banswara",
            "Baran",
            "Barmer",
            "Bharatpur",
            "Bhilwara",
            "Bikaner",
            "Bundi",
            "Chittorgarh",
            "Churu",
            "Dausa",
            "Dholpur",
            "Dungarpur",
            "Hanumangarh",
            "Jaipur",
            "Jaisalmer",
            "Jalore",
            "Jhalawar",
            "Jhunjhunu",
            "Jodhpur",
            "Karauli",
            "Kota",
            "Nagaur",
            "Pali",
            "Pratapgarh",
            "Rajsamand",
            "Sawai Madhopur",
            "Sikar",
            "Sirohi",
            "Sri Ganganagar",
            "Tonk",
            "Udaipur"
          ]
        },
        {
          states: "Sikkim",
          districts: [
            "East Sikkim",
            "North Sikkim",
            "South Sikkim",
            "West Sikkim"
          ]
        },
        {
          states: "Tamil Nadu",
          districts: [
            "Ariyalur",
            "Chengalpattu",
            "Chennai",
            "Coimbatore",
            "Cuddalore",
            "Dharmapuri",
            "Dindigul",
            "Erode",
            "Kallakurichi",
            "Kancheepuram",
            "Kanyakumari",
            "Karur",
            "Krishnagiri",
            "Madurai",
            "Nagapattinam",
            "Namakkal",
            "Nilgiris",
            "Perambalur",
            "Pudukkottai",
            "Ramanathapuram",
            "Ranipet",
            "Salem",
            "Sivaganga",
            "Tenkasi",
            "Thanjavur",
            "Theni",
            "Thoothukudi",
            "Tiruchirappalli",
            "Tirunelveli",
            "Tirupathur",
            "Tiruppur",
            "Tiruvallur",
            "Tiruvannamalai",
            "Tiruvarur",
            "Vellore",
            "Viluppuram",
            "Virudhunagar"
          ]
        },
        {
          states: "Telangana",
          districts: [
            "Adilabad",
            "Bhadradri Kothagudem",
            "Hyderabad",
            "Jagtial",
            "Jangaon",
            "Jayashankar Bhupalapally",
            "Jogulamba Gadwal",
            "Kamareddy",
            "Karimnagar",
            "Khammam",
            "Komaram Bheem Asifabad",
            "Mahabubabad",
            "Mahbubnagar",
            "Mancherial",
            "Medak",
            "Medchal",
            "Mulugu",
            "Nagarkurnool",
            "Nalgonda",
            "Narayanpet",
            "Nirmal",
            "Nizamabad",
            "Peddapalli",
            "Rajanna Sircilla",
            "Rangareddy",
            "Sangareddy",
            "Siddipet",
            "Suryapet",
            "Vikarabad",
            "Wanaparthy",
            "Warangal Rural",
            "Warangal Urban",
            "Yadadri Bhuvanagiri"
          ]
        },
        {
          states: "Tripura",
          districts: [
            "Dhalai",
            "Gomati",
            "Khowai",
            "North Tripura",
            "Sepahijala",
            "South Tripura",
            "Unakoti",
            "West Tripura"
          ]
        },
        {
          states: "Uttar Pradesh",
          districts: [
            "Agra",
            "Aligarh",
            "Ambedkar Nagar",
            "Amethi (Chatrapati Sahuji Mahraj Nagar)",
            "Amroha (J.P. Nagar)",
            "Auraiya",
            "Azamgarh",
            "Baghpat",
            "Bahraich",
            "Ballia",
            "Balrampur",
            "Banda",
            "Barabanki",
            "Bareilly",
            "Basti",
            "Bhadohi",
            "Bijnor",
            "Budaun",
            "Bulandshahr",
            "Chandauli",
            "Chitrakoot",
            "Deoria",
            "Etah",
            "Etawah",
            "Farrukhabad",
            "Fatehpur",
            "Firozabad",
            "Gautam Buddha Nagar",
            "Ghaziabad",
            "Ghazipur",
            "Gonda",
            "Gorakhpur",
            "Hamirpur",
            "Hapur (Panchsheel Nagar)",
            "Hardoi",
            "Hathras",
            "Jalaun",
            "Jaunpur",
            "Jhansi",
            "Kannauj",
            "Kanpur Dehat",
            "Kanpur Nagar",
            "Kanshiram Nagar (Kasganj)",
            "Kaushambi",
            "Kushinagar (Padrauna)",
            "Lakhimpur - Kheri",
            "Lalitpur",
            "Lucknow",
            "Maharajganj",
            "Mahoba",
            "Mainpuri",
            "Mathura",
            "Mau",
            "Meerut",
            "Mirzapur",
            "Moradabad",
            "Muzaffarnagar",
            "Pilibhit",
            "Pratapgarh",
            "Prayagraj (Allahabad)",
            "Raebareli",
            "Rampur",
            "Saharanpur",
            "Sambhal (Bhim Nagar)",
            "Sant Kabir Nagar",
            "Shahjahanpur",
            "Shamali (Prabuddh Nagar)",
            "Shravasti",
            "Siddharth Nagar",
            "Sitapur",
            "Sonbhadra",
            "Sultanpur",
            "Unnao",
            "Varanasi"
          ]
        },
        {
          states: "Uttarakhand",
          districts: [
            "Almora",
            "Bageshwar",
            "Chamoli",
            "Champawat",
            "Dehradun",
            "Haridwar",
            "Nainital",
            "Pauri Garhwal",
            "Pithoragarh",
            "Rudraprayag",
            "Tehri Garhwal",
            "Udham Singh Nagar",
            "Uttarkashi"
          ]
        },
        {
          states: "West Bengal",
          districts: [
            "Alipurduar",
            "Bankura",
            "Birbhum",
            "Cooch Behar",
            "Dakshin Dinajpur (South Dinajpur)",
            "Darjeeling",
            "Hooghly",
            "Howrah",
            "Jalpaiguri",
            "Jhargram",
            "Kalimpong",
            "Kolkata",
            "Malda",
            "Murshidabad",
            "Nadia",
            "North 24 Parganas",
            "Paschim Medinipur (West Medinipur)",
            "Purba Medinipur (East Medinipur)",
            "Purulia",
            "South 24 Parganas",
            "Uttar Dinajpur (North Dinajpur)"
          ]
        }
    ]

    // const locations = [
    //     {
    //         States:"States *",
    //         Districts:['Districts *']
    //     },
    //     {
    //         States:"Andhra Pradesh",
    //         Districts:["Districts *",'Srikakulam',"Parvathipuram Manyam","Vizianagaram","Visakhapatnam",
    //         "Alluri Sitharama Raju","Anakapalli","Kakinada","East Godavari","Dr. B. R. Ambedkar Konaseema","Eluru","West Godavari","NTR","Krishna","Palnadu","Guntur","Bapatla","Prakasam","Sri Potti Sriramulu Nellore",
    //         "Kurnool","Nandyal","Anantapur","Sri Sathya Sai","YSR","Annamayya","Tirupati","Chittoor"]
    //     },
    //     {
    //         States:"Arunachal Pradesh",
    //         Districts:["Districts *","Tawang",'West Kameng',"East Kameng","Pakke Kessang","Kurung Kumey",
    //         "Papum Pare","Itanagar","Kra Daadi","Lower Subansiri","Kamle",
    //         "Keyi Panyor","Upper Subansiri","Shi Yomi","West Siang","Siang","Lower Siang","Lepa Rada","Upper Siang",
    //         "East Siang","Dibang Valley","Lower Dibang Valley","Lohit","Anjaw","Namsai","Changlang","Tirap","longding"]
    //     },
    //     {
    //         States:"Assam",
    //         Districts:["Districts *","Baksa",'Bajali',"Barpeta","Biswanath","Bongaigaon","Cachar","Charaideo","Chirang",
    //         "Darrang","	Dhemaji","Dhubri","Dibrugarh","Dima Hasao","Goalpara","Golaghat","Hailakandi",
    //         "Hojai","Jorhat","Kamrup Metropolitan","Kamrup","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Majuli","Morigaon","longding","Nagaon","Nalbari","Sivasagar","Sonitpur","South Salmara-Mankachar","Tamulpur","	Tinsukia","Udalguri","West Karbi Anglong"]
    //     },
    //     {
    //         States:"Bihar",
    //         Districts:["Districts *","Araria",'Arwal',"Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran","Gaya","Gopalganj","Jamui","Jehanabad","Khagaria","	Kishanganj","Kaimur","	Katihar","Lakhisarai","Madhubani","Munger","Madhepura","Muzaffarpur","Nalanda","Nawada","Patna","Purnia",
    //         "Rohtas","Saharsa","Samastipur","Sheohar","Sheikhpura","Saran","Sitamarhi","Supaul","Siwan","Vaishali","West Champaran"]
    //     },
    //     {
    //         States:"Chandigarh",
    //         Districts:["Districts *","Chandigarh"]
    //     },
    //     {
    //         States:"Chhattisgarh",
    //         Districts:["Districts *","Balod","Baloda Bazar","	Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dantewada","Dhamtari","Durg","Gariaband","Gaurella Pendra Marwahi","Janjgir-Champa","Jashpur","Kabirdham","Kanker","Kondagaon","Khairagarh Chhuikhadan Gandai","Korba","Koriya","Mahasamund","	Manendragarh Chirmiri Bharatpur","	Mohla Manpur Ambagarh Chowki","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sarangarh Bilaigarh","Sakti","Sukma","Surajpur","Surguja"]
    //     },
    //     {
    //         States:"Delhi",
    //         Districts:["Districts *","Central Delhi","East Delhi","New Delhi","North Delhi","North East Delhi","North West Delhi","Shahdara","South Delhi","South East Delhi","South West Delhi","West Delhi"]
    //     },
    //     {
    //         States:"Goa",
    //         Districts:["Districts *","North Goa","South Goa"]
    //     },
    //     {
    //         States:"Gujarat",
    //         Districts:["Districts *","Ahmedabad","Amreli","Anand","Aravalli","Banaskantha","Bharuch","Bhavnagar","Botad","Chhota Udaipur","Dahod","Dang","Devbhumi Dwarka","Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kheda","Kutch","Mahisagar","Mehsana","Morbi","Narmada","Navsari","Panchmahal","Patan","Porbandar","Rajkot","Sabarkantha","Surat","Surendranagar","Tapi","Vadodara","Valsad"]
    //     },
    //     {
    //         States:"Haryana",
    //         Districts:["Districts *","Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gurugram","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Nuh","Palwal","Panchkula","Panipat","Kutch","Mahisagar","Mehsana","Morbi","Narmada","Navsari","Panchmahal","Patan","Porbandar","Rajkot","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"]
    //     },
    //     {
    //         States:"Himachal Pradesh",
    //         Districts:["Districts *","Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul and Spiti","Mandi","Shimla","Sirmaur","Solan","Una"]
    //     },
    //     {
    //         States:"Jammu & Kashmmir",
    //         Districts:["Districts *","Kathua","Jammu","Samba","Udhampur","Reasi","Rajouri","Poonch","Doda","Ramban","Kishtwar"]
    //     },
    //     {
    //         States:"Jharkhand",
    //         Districts:["Districts *","Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribagh","Jamtara","Khunti","Kodarma","Latehar","Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahebganj","Saraikela Kharsawan","Simdega","West Singhbhum"]
    //     },
    //     {
    //         States:"Karnataka",
    //         Districts:["Districts *","Bagalkote","Bengaluru Urban","Bengaluru Rural","Chamarajanagara","Davanagere","Bagalakote","Gadaga","Udupi","Koppala","Ramanagara","Chikkaballapura","Yadagiri","Vijayanagara","Belagavi","Ballari","Bidar","Vijayapura","Chamarajanagar","Chikkaballapura","Chikkamagaluru","Chitradurga","Dakshina Kannada","Davanagere","Gadag","Kalaburagi","Hassan","Haveri","Kodagu","Kolar","Koppal","Mandya","Mysuru","Raichur","Ramanagara","Shivamogga","Tumakuru","Uttara Kannada"]
    //     },
    //     {
    //         States:"Kerala",
    //         Districts:["Districts *","Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"]
    //     },
    //     {
    //         States:"Madhya Pradesh",
    //         Districts:["Districts *","Bhopal","Raisen","Rajgarh","Sehore","Vidisha","Morena","Sheopur","Bhind","Gwalior","Ashoknagar","Shivpuri","Datia","Guna","Alirajpur","Barwani","Burhanpur","Indore","Dhar","Jhabua","Khandwa","Khargone","Balaghat","Chhindwara","Jabalpur","Katni","Mandla","Narsinghpur","Seoni","Dindori","Pandhurna","Betul","Harda","Narmadapuram","Rewa","Satna","Sidhi","Singrauli","Mauganj","Maihar","Chhatarpur","Damoh","Panna","Sagar","Tikamgarh","Niwari","Anuppur","Shahdol","Umaria","Agar Malwa","Dewas","Mandsaur","Neemuch","Ratlam","Shajapur","Ujjain"]
    //     },
    //     {
    //         States:"Maharashtra",
    //         Districts:["Districts *","Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai Suburban","Nagpur","Nanded	","Nandurbar","Nashik","Dharashiv","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal","Kalwan","Malegaon","Mira Bhayandar","Kalyan","Pusad","Achalpur","Sakoli","Chimur","Aheri","Bhusawal","Udgir","Ambajogai","Kinwat","Mandesh","Shivneri","Jawhar","Mandangad","Mahad","Sangamner","Shirdi","Shrirampur","Khamgaon","Katol"]
    //     },
    //     {
    //         States:"Manipur",
    //         Districts:["Districts *","Bishnupur","Imphal East","Imphal West","Chandel","Churachandpur","Jiribam","Kakching","Kamjong","Kangpokpi","Noney","Pherzawl","Senapati","Tamenglong","Tengnoupal","Thoubal","Ukhrul"]
    //     },
    //     {
    //         States:"Meghalaya",
    //         Districts:["Districts *","North Garo Hills","East Garo Hills","South Garo Hills","West Garo Hills","South West Garo Hills","West Jaintia Hills","East Jaintia Hills","East Khasi Hills","West Khasi Hills","South West Khasi Hills","Eastern West Khasi Hills","Ri-Bhoi"]
    //     },
    //     {
    //         States:"Mizoram",
    //         Districts:["Districts *","Aizawl","Champhai","Hnahthial","Khawzawl","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Saitual","Serchhip"]
    //     },
    //     {
    //         States:"Nagaland",
    //         Districts:["Districts *","Chümoukedima","Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Niuland","Noklak","Peren","Shamator","Tseminyü","Tuensang","Wokha","Zünheboto"]
    //     },
    //     {
    //         States:"Odisha",
    //         Districts:["Districts *","Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh","Cuttack","Debagarh","Dhenkanal","Gajapati","Ganjam","Jagatsinghapur","Jajpur","Jharsuguda","Kalahandi","Kandhamal","Kendrapara","Kendujhar","Khordha","Koraput","Malkangiri","Mayurbhanj","Nabarangpur","Nayagarh","Nuapada","Puri","Rayagada","Subarnapur","Sundargarh","Sambalpur"]
    //     },
    //     {
    //         States:"Puducherry",
    //         Districts:["Districts *","Karaikal","Mahé","Puducherry","Yanam"]
    //     },
    //     {
    //         States:"Punjab",
    //         Districts:["Districts *","Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Firozpur","Fazilka","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Malerkotla","Mansa","Moga","Sri Muktsar Sahib","Pathankot","Patiala","Rupnagar","Sahibzada Ajit Singh Nagar","Sangrur","Shaheed Bhagat Singh Nagar","Tarn Taran"]
    //     },
    //     {
    //         States:"Rajasthan",
    //         Districts:["Districts *","Anupgarh","Ajmer","Alwar","Balotra","Banswara","Baran","Barmer","Beawar","Bharatpur","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Hanumangarh","Jaisalmer","Jalore","Jhalawar","Jhunjhunu","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Sri Ganganagar","Tonk","Udaipur","Dudu","Deeg","Didwana-Kuchaman","Gangapur","Jaipur Rural","Jodhpur Rural","Kekri","Khairthal Tijara","Kotputli Behror","Neem ka Thana","Phalodi","Sanchore","Salumbar","Shahpura","Jaipur Urban","Jodhpur Urban"]
    //     },
    //     {
    //         States:"Sikkim",
    //         Districts:["Districts *","Gangtok","Mangan","Pakyong","Soreng","Namchi","Gyalshing"]
    //     },
    //     {
    //         States:"Tamil Nadu",
    //         Districts:["Districts *","Ariyalur","Chengalpattu","Chennai","Coimbatore","Dharmapuri","Dindigul","Erode","Kallakurichi","Kancheepuram","Kanyakumari","Karur","Krishnagiri","Madurai","Mayiladuthurai","	Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Ranipet","Salem","	Sivaganga","Tenkasi","Thoothukudi","Thanjavur","Theni","Tiruchirappalli","Tirunelveli","Tirupathur","Tiruppur","Tiruvallur","Tiruvannamalai","Tiruvarur","Vellore","Viluppuram","Virudhunagar"]
    //     },
    //     {
    //         States:"Telangana",
    //         Districts:["Districts *","Adilabad","Kumuram Bheem Asifabad","Mancherial","Nirmal","Nizamabad","Jagtial","Peddapalli","Kamareddy","Rajanna Sircilla","Karimnagar","Jayashankar Bhupalpally","Sangareddy","Medak","Siddipet","Jangaon","Hanamkonda","Warangal","Mulugu","Bhadradri kothagudem","Khammam","Mahabubabad","Suryapet","Nalgonda","Yadadri Bhuvanagiri","Mahabubnagar","Nagarkurnool","Wanaparthy","Jogulamba Gadwal","Medchal Malkajgiri","Hyderabad","Ranga Reddy","Vikarabad","Narayanpet","Mahabubnagar","Nagarkurnool","Wanaparthy","Gadwal"]
    //     },
    //     {
    //         States:"Tripura",
    //         Districts:["Districts *","Ambassa","Udaipur","Khowai","Bishramganj","Kailashahar","Dharmanagar","Belonia","Agartala","Dhalai","North Tripura","South Tripura","West Tripura"]
    //     },
    //     {
    //         States:"Uttarakhand",
    //         Districts:["Districts *","Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri Garhwal","Pithoragarh","Rudraprayag","Tehri Garhwal","Udham Singh Nagar","Uttarkashi"]
    //     },
    //     {
    //         States:"Uttar Pradesh",
    //         Districts:["Districts *","Agra","Aligarh","Ambedkar Nagar","Ayodhya","Amethi","Amroha","Auraiya","Azamgarh","Badaun","Bagpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly","Basti","Bijnor","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hapur","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kannauj","Kanpur Dehat","Kanpur Nagar","Kasganj","Kaushambi","Kushinagar","Lakhimpur Kheri","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","Prayagraj","Rae Bareli","Rampur","Saharanpur","Sant Kabir Nagar","Sant Ravidas Nagar","Sambhal","Shahjahanpur","Shamli","Shravasti","Siddharthnagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi"]
    //     },
    //     {
    //         States:"West Bengal",
    //         Districts:["Districts *","Alipurduar","Bankura","Paschim Bardhaman","Purba Bardhaman","Birbhum","Cooch Behar","Darjeeling","Dakshin Dinajpur","Hooghly","Howrah","Jalpaiguri","Jhargram","Kolkata","Kalimpong","Malda","Paschim Medinipur","Purba Medinipur","Murshidabad","Nadia","North 24 Parganas","South 24 Parganas","Purulia","Uttar Dinajpur"]
    //     }
    // ];

    return(<>

        <div className="franchise-form-main container-fluid">

            <div className="franchise-form-body row d-flex  justify-content-evenly align-items-start my-lg-2 my-md-2 my-sm-3 my-2">

                <div className="franchise-form-head col-lg-11 col-md-11 col-sm-11 col-11 my-lg-4 my-md-3 my-sm-2 my-3 ">
                    <h1> Franchise Enquiry Form :</h1>
                </div>

                <div className="col-lg-4 col-md-8 my-lg-0 my-md-0 my-sm-3 my-2">

                    <form className="col-lg-10  d-flex flex-column justify-content-center align-items-center " onSubmit={submitForm}>

                        <div className="franchise-form col-lg-10 col-md-7 col-sm-6 col-8 d-flex flex-column justify-content-around">

                            <input type="text" name="colabname" placeholder="Name *" className="mb-2 py-1 px-3 " onChange={storingValue} value={colabData.colabname}/>

                            <input type="text" name="colabstudies" placeholder="Education/Qualification *" className="mb-2 py-1 px-3" onChange={storingValue} value={colabData.colabstudies}/>

                            <input type="number" name="colabnumber" placeholder="Contact Number *" className="mb-2 py-1 px-3" onChange={storingValue} value={colabData.colabnumber}/>

                            <input type="number" name="colabaltnumber" placeholder="Alternate Number *" className="mb-2 py-1 px-3" onChange={storingValue} value={colabData.colabaltnumber}/>

                            <input type="email" name="colabemail" placeholder="Email ID *" className="mb-2 py-1 px-3" onChange={storingValue} value={colabData.colabemail}/>

                            <select className="mb-2 py-1 px-3 prof" name="colabprofession" onChange={storingValue} value={colabData.colabprofession}>
                                <option> Profession * </option>
                                <option> Fresher </option>
                                <option> Experience </option>
                            </select>

                            <h3 className="mb-2 ">Innovaskill Technologies</h3>

                            <div className="select-location col-12 d-flex justify-content-between mb-2" >

                                <select name="colabstate" className=" col-5 py-1 " onChange={selectDis} value={colabLocation.colabstate}>
                                    {locations.map( (l) => {
                                        return(<>
                                            <option value={l.states}> {l.states} </option>
                                        </>)
                                    })}
                                </select>

                                <select name="colabdistrict" className="col-5 py-1 " onChange={storingLoc} value={colabLocation.colabdistrict}>
                                    {
                                    Districtss.map( (d) => {
                                        return(<>
                                            <option value={d}> { d } </option>
                                        </>)
                                    })}
                                </select>

                            </div>

                            <input type="text" name="colabcity" placeholder="Enter City *" className="mb-2 py-1 px-3" onChange={storingLoc} value={colabLocation.colabcity} />

                        </div>

                        <div className="franchise-form-btn col-4 my-2">
                            <button className="col-12 py-1 px-3"> Get Details </button>
                        </div>

                    </form>

                </div>

                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                    <div className="franchise-form-img col-10 ">
                        <img src={form} className="img-fluid"/>
                    </div>
                </div>

            </div>

        </div>

    </>)
}