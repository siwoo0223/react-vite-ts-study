// import React, { useRef, useState } from "react";
// import { Card, CardContent, Box, Typography, Button, TextField, InputAdornment, IconButton } from "@mui/material";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { useNavigate } from "react-router-dom";
// import AddressModal from "../../component/myInfo/addressModal";
// import ClearIcon from '@mui/icons-material/Clear';
// import IdCheckModal from '../../component/register/idCheckModal';
// import CTTextField from "../../component/textField";

// import { checkIdApi, registerApi } from "../../api/user/userApi";


function Register() {
    // const navigate = useNavigate();
    // const inputRef = useRef(null); // Ref 생성
    // const [gender, setGender] = useState("남자");
    // const [nationality, setNationality] = useState("내국인");
    // const [birthDate, setBirthDate] = useState("");
    // const [openAddress, setOpenAdress] = useState(false);
    // const [modalState, setModalState] = useState(false);
    // const [addressText, setAddressText] = useState("");
    // const [open, setOpen] = useState(false);
    // const [newId, setNewId] = useState("");
    // const [formValues, setFormValues] = useState({
    //     id: "",
    //     password: "",
    //     email: birthDate,
    //     name: "",
    //     phone: "",
    //     address: "",
    //     addressDetail: "",
    // });

    // const handleOpen = () => setOpen(true);

    // const addressModalClose = () => {
    //     setOpenAdress(false);
    // }

    // const onCompletePost = data => {
    //     console.log("[data]" + data);
    //     setModalState(false);
    //     setOpenAdress(false);
    //     setAddressText(data.address);
    // };

    // const valiCheck = (formData) => {
    //     let arr = {
    //         flag: true,
    //         msg: null
    //     }
    //     if (!formData.get("username")) {
    //         arr.flag = false
    //         arr.msg = "아이디를 입력해주세요.";
    //         return arr;
    //     }
    //     if (!formData.get("password")) {
    //         arr.flag = false
    //         arr.msg = "비밀번호를 입력해주세요.";
    //         return arr;
    //     }
    //     if (!formData.get("email")) {
    //         arr.flag = false
    //         arr.msg = "이메일을 입력해주세요.";
    //         return arr;
    //     }
    //     if (!formData.get("name")) {
    //         arr.flag = false
    //         arr.msg = "이름을 입력해주세요.";
    //         return arr;
    //     }
    //     if (!birthDate) {
    //         arr.flag = false
    //         arr.msg = "생년월일을 입력해주세요.";
    //         return arr;
    //     }
    //     if (!formData.get("phone")) {
    //         arr.flag = false
    //         arr.msg = "핸드폰번호를 입력해주세요.";
    //         return arr;
    //     }

    //     return arr;
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const formData = new FormData(e.target);
    //     const vali = valiCheck(formData);

    //     if (vali.flag) {
    //         const data = {
    //             username: formData.get("username"),
    //             password: formData.get("password"),
    //             email: formData.get("email"),
    //             name: formData.get("name"),
    //             birthDate: birthDate ? birthDate.toISOString().split("T")[0].replace(/-/g,"") : "", // ISO 형식으로 저장
    //             phone: formData.get("phone"),
    //             gender: gender == "남자" ? 1 : 0,
    //             local: nationality == "내국인" ? 0 : 1,
    //             address: addressText,
    //             addressDetail: formData.get("addressDetail"),
    //         };
    //         try {
    //             await registerApi(data);
    //             navigate('/login/login')
    //         } catch (error) {
    //             console.error("회원가입 실패", error);
    //             alert("회원가입 중 오류가 발생했습니다.");
    //         }
    //     } else {
    //         alert(vali.msg);
    //     }
    // };

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormValues({ ...formValues, [name]: value });
    // };

    // const clearField = (fieldName) => {
    //     if (fieldName === "birthDate") {
    //         setBirthDate("");
    //     } else if (fieldName === "address") {
    //         setAddressText("");
    //     } else if (fieldName === "id") {
    //         setNewId("");
    //     } else {
    //         setFormValues({ ...formValues, [fieldName]: "" });
    //     }
    // };

    // const xIcon = (fieldName) => ({
    //     endAdornment: (
    //         <InputAdornment position="end">
    //             {(
    //                 (fieldName === "birthDate" && birthDate) ||
    //                 (fieldName === "address" && addressText) ||
    //                 (fieldName === "id" && newId) ||
    //                 formValues[fieldName]
    //             ) && (
    //                     <IconButton onClick={(e) => { e.stopPropagation(); clearField(fieldName) }}>
    //                         <ClearIcon />
    //                     </IconButton>
    //                 )}
    //         </InputAdornment>
    //     ),
    // });

    // const handleClose = () => {
    //     setOpen(false)
    // }

    // const checkId = async (e) => {
    //     e.preventDefault();
    //     const pattern = /^[가-힣a-zA-Z0-9]{4,12}$/;
    //     const flag = pattern.test(newId);
    //     if (!flag) {
    //         alert("다시 입력해주세요.");
    //         setNewId("");
    //         if (inputRef.current) {
    //             inputRef.current.focus(); // 포커스 설정
    //         }
    //     } else {
    //         try {
    //             const data = await checkIdApi(newId); // await을 추가하여 비동기 호출 대기
    //             if (data.data) {
    //                 alert(data.message);
    //                 setOpen(false);
    //             } else {
    //                 alert(data.message);
    //                 setNewId("");
    //                 if (inputRef.current) {
    //                     inputRef.current.focus(); // 포커스 설정
    //                 }
    //             }
    //         } catch (error) {
    //             console.error("ID 확인 중 오류 발생:", error);
    //             alert("아이디 확인 중 오류가 발생했습니다.");
    //         }
    //     }
    // }

    return (
        <>
            {/* <form onSubmit={handleSubmit}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "140vh",
                        background: "linear-gradient(135deg, black, white)",
                    }}
                >
                    <Card
                        sx={{
                            width: "500px",
                            padding: "20px",
                            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                            borderRadius: "16px",
                        }}
                    >
                        <CardContent>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    marginBottom: "20px",
                                    color: "black",
                                }}
                            >
                                회원가입
                            </Typography>
                        </CardContent>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "16px",
                                marginBottom: "20px",
                            }}
                        >
                            {newId && (
                                <CTTextField
                                    label="아이디"
                                    fullWidth
                                    name="username"
                                    value={newId}
                                    InputProps={xIcon("username")}
                                />
                            )}
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{
                                    flex: 1,
                                    background: "black",
                                    "&:hover": {
                                        background: "white",
                                        color: "black"
                                    },
                                }}
                                onClick={handleOpen}
                            >
                                아이디
                            </Button>
                            <CTTextField
                                label="비밀번호"
                                type="password"
                                placeholder="8자리 이상 입력해주세요."
                                name="password"
                                value={formValues.password}
                                onChange={handleInputChange}
                                InputProps={xIcon("password")}
                            />
                            <CTTextField
                                label="이메일"
                                type="email"
                                name="email"
                                value={formValues.email}
                                onChange={handleInputChange}
                                InputProps={xIcon("email")}
                            />
                            <CTTextField
                                label="이름"
                                name="name"
                                value={formValues.name}
                                onChange={handleInputChange}
                                InputProps={xIcon("name")}
                            />

                            <DatePicker
                                selected={birthDate}
                                onChange={setBirthDate} // 날짜 변경 시 state 업데이트
                                dateFormat="yyyy-MM-dd" // 날짜 형식 지정
                                showYearDropdown
                                scrollableYearDropdown
                                yearDropdownItemNumber={50}
                                popperPlacement="bottom"
                                customInput={
                                    <CTTextField
                                        label="생년월일"
                                        name="생년월일"
                                        value={birthDate ? birthDate.toLocaleDateString() : ""} // 선택된 날짜 표시
                                        onClick={(e) => e.stopPropagation()} // DatePicker 클릭 방지
                                        onChange={handleInputChange}
                                        InputProps={xIcon("birthDate")}
                                    />
                                }
                            />

                            <CTTextField
                                label="핸드폰번호"
                                type="tel"
                                name="phone"
                                value={formValues.phone}
                                onChange={handleInputChange}
                                InputProps={xIcon("phone")}
                            />

                            <Box>
                                <Typography sx={{ marginBottom: "8px", color: "black" }}>성별</Typography>
                                <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                                    {["남자", "여자"].map((option) => (
                                        <Button
                                            key={option}
                                            variant={gender === option ? "contained" : "outlined"}
                                            color="primary"
                                            onClick={() => setGender(option)}
                                            sx={{
                                                width: "45%",
                                                backgroundColor: gender === option ? "black" : "white",
                                                color: gender === option ? "white" : "black",
                                                borderColor: "black",
                                                "&:hover": {
                                                    backgroundColor: gender === option ? "white" : "black",
                                                    color: gender === option ? "black" : "white",
                                                },
                                            }}
                                        >
                                            {option}
                                        </Button>
                                    ))}
                                </Box>
                            </Box>

                            <Box>
                                <Typography sx={{ marginBottom: "8px", color: "black" }}>내/외국인</Typography>
                                <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                                    {["내국인", "외국인"].map((option) => (
                                        <Button
                                            key={option}
                                            variant={nationality === option ? "contained" : "outlined"}
                                            color="primary"
                                            onClick={() => setNationality(option)}
                                            sx={{
                                                width: "45%",
                                                backgroundColor: nationality === option ? "black" : "white",
                                                color: nationality === option ? "white" : "black",
                                                borderColor: "black",
                                                "&:hover": {
                                                    backgroundColor: nationality === option ? "white" : "black",
                                                    color: nationality === option ? "black" : "white",
                                                },
                                            }}
                                        >
                                            {option}
                                        </Button>
                                    ))}
                                </Box>
                            </Box>

                            <CTTextField
                                label="주소"
                                name="address"
                                value={addressText}
                                onClick={() => {
                                    setOpenAdress(true);
                                    setModalState(true);
                                }}
                                InputLabelProps={{
                                    shrink: addressText ? true : false,
                                }}
                                onChange={handleInputChange}
                                InputProps={xIcon("address")}
                            />
                            <AddressModal
                                open={openAddress}
                                onClose={addressModalClose}
                                onCompletePost={onCompletePost}
                                modalState={modalState}
                            ></AddressModal>

                            <CTTextField
                                label="상세주소"
                                name="addressDetail"
                                value={formValues.addressDetail}
                                onChange={handleInputChange}
                                InputProps={xIcon("addressDetail")}
                            />
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                gap: "16px",
                            }}
                        >
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                sx={{
                                    flex: 1,
                                    background: "black",
                                    "&:hover": {
                                        background: "white",
                                        color: "black"
                                    },
                                }}
                            >
                                회원가입
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{
                                    flex: 1,
                                    color: "black",
                                    borderColor: "black",
                                    "&:hover": {
                                        background: "black",
                                        color: "white"
                                    },
                                }}
                                onClick={() => navigate(-1)}
                            >
                                취소
                            </Button>
                        </Box>
                    </Card>
                </Box>
            </form>
            <IdCheckModal
                open={open}
                onClose={handleClose}
                newId={newId}
                setNewId={setNewId}
                checkId={checkId}
                ref={inputRef}
            /> */}
        </>
    );
}

export default Register;