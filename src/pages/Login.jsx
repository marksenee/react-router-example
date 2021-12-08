import LoginButton from "../components/LoginButton";

export default function Login(props) {

    return (
        <div>
            <h2>
                Login페이지 입니다.
            </h2>
            <LoginButton {...props}/>
        </div>
    )
}