// hpme,adress email에 기본 파라미터가 들어간다
function addContact(name, mobile, home = '없음', address = '없음', email = '없음') {
    let str = `name=${name},mobile=${mobile},home=${home},` + ` address=${address}, email=${email}`;
    console.log(str);
}
// 기본 파라미터를 널어주면 전달하지 않은 인자가 기본값으로 들어간다
addContact('홍길동', '010-222-3331');
// 기본 파라미터가 있는 값에 인자를 널어주면 기본값을 덮어씌운다
addContact('이몽룡 ', '010 222 3331', '02 3422 9900', '서울시');
