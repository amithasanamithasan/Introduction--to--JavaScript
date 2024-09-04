/* 
1. show output from: 1-50
2. if the number is divisible by 3 then instead of the number, show 'foo'
3. if the number is divisible by 5 then instead of the number, show 'bar'
4. if the number is divisible by both 3 and 5 then instead of the number show 'foobar'
*/
for(let i = 1; i <= 50; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log('foobar');
    }
    else if(i % 3 === 0){
        console.log('foo');
    }
    else if (i % 5 === 0){
        console.log('bar');
    }
    else{
        console.log(i);
    }
}
// OUT PUT 
// 1
// 2
// foo
// 4
// bar
// foo
// 7
// 8
// foo
// bar
// 11
// foo
// 13
// 14
// foobar
// 16
// 17
// foo
// 19
// bar
// foo
// 22
// 23
// foo
// bar
// 26
// foo
// 28
// 29
// foobar
// 31
// 32
// foo
// 34
// bar
// foo
// 37
// 38
// foo
// bar
// 41
// foo
// 43
// 44
// foobar
// 46
// 47
// foo
// 49
// bar