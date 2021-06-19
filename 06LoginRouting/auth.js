const users = [
    {email:"kim@test.com" , password : "123" , name : "Kim"},
    {email:"lee@test.com" , password : "456" , name : "Lee"},
    {email:"park@test.com" , password : "789" , name : "Park"},
];

export function signIn( {email, password} ){
    //users => DB
    // DB에서 사용자가입력한 email과 password가 일치한 user를 찾는다.
    const user = users.find(
        (user) => user.email === email && user.password === password
    );
    // 참일경우 해당 user retrun
    // 거짓일 경우 ERROR

    if(user === undefined) throw new Error();
    return user;
}