//  Task 1
function absValue(a)
{
    if(a >= 0)
        return a;
    else
        return -a;
}

//console.log(absValue(-1));

//  Task 2
function isPalindrom(a)
{
    let size = a.length;
    let half = Math.floor(size / 2);
    let res = true;
    for(let i = 0; i < half; i++)
    {
        if(a[i] != a[size - 1 - i])
            res = false;
    }
    return res;
}

//console.log(isPalindrom('12321'));

//  Task 3
let sizeArray = function(a)
{
    let r = a[0].length;
    for(let i = 0; i < a.length; i++)
    {
        if(a[i].length != r)
            return -1; 
    }
    return r;
}

function matrixAddition(a, b)
{
    a = [
            [1,2,3],
            [1,2,3],
            [1,2,3]
        ];
    b = [
            [1,2,3],
            [1,2,3],
            [1,2,3]
        ];    
    let Asize = [];
    let Bsize = [];
    Asize.push(a.length);
    Asize.push(sizeArray(a));
    Bsize.push(b.length);
    Bsize.push(sizeArray(b));
    if(Asize[1] == -1 || Bsize[1] == -1 ||
        Asize[0] != Bsize[0] || Asize[1] != Bsize[1])
        return false;
    Asize = Asize[0];
    Bsize = Bsize[1];
    for(let i = 0; i < Asize; i++)
    {
        for(let j = 0; j < Bsize; j++)
        {
            a[i][j] += b[i][j];
        }
    }
    return a;
}

//console.log(matrixAddition());
sizeArray = null;

//  Task 4
let student = {
    group: 201,
    last_name: "Иванов",
    first_name: "Иван"
};
let res = '';
for(let key in student)
{
    res += key + ', ';
}
//console.log(res);
//console.log(`Студент ${student.first_name} ${student.last_name} учится в ${student.group} группе`);

//  Task 5

