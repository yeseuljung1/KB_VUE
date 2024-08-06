let msg = 'GLOBAL';
function outer() {
    // 스코프 내에서 가장 가까이 읶는 견수 값을 먼저 찾는다
    // 같은 스코프 내에 변수가 없으면 더 넓은 스코프로 이동
    let msg = 'OUTER';
    console.log(msg); /* outer */
    if (true) {
        let msg = 'BLOCK';
        console.log(msg); /* block */
    }
}
outer();
