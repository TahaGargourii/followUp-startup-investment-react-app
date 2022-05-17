export default function authHeader() {

    const user = JSON.parse(localStorage.getItem("user"));
    console.log('here authHeader',user);

    if (user && user.token) {
        console.log('here authHeader yes ',user);
        return {
                Authorization: `Bearer ${user.token}`,
                //"Access-Control-Allow-Origin": "*",
                //"Content-Type": "application/json",
            };
    } else {
        console.log('here authHeader null ');
        return {};
    }
}