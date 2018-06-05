const rf = fn => (...args) => {
    let res = fn(...args)
    while (res[0] == "CALL") {
        res = fn(...res.splice(1,res.length))
    }
    return res
}

const log = (...what) => console.log(...what)

/* Array Functions */
const head = ([arr]) => arr
const tail = (arr,length = 1) => arr[arr.length-length]
const rest = ([arr,...rest]) => rest  
const isEmpty = arr => arr.length == 0
const sumArray = arr => arr.reduce((accum,cur) => accum+cur,0)
const stringToInt = arr => arr.map(toInt)
const isDuplicate = rf(
    (arr, index = 1) => {
        if (index == arr.length) return false
        if (arr[index] == arr[index-1]) return true
        return ["CALL",arr,index+1]
    }
)

// const isDuplicate = arr => arr.reduce((accum,val,index,arr) => {

// })

const boolToIndex = arr => arr.reduce((accum,val,index) => {
    if (val) { accum.push(index) }
    return accum
},[])

/* Number Functions */
const isEven = x => x % 2 == 0
const isInt = x => x == Math.floor(x)
const toInt = x => +x;
const reverseNum = x => x.toString().split('').reverse().join('')
const str = x => x.toString()
const isPandigital = x => x.toString().split("").sort().toString() == "0,1,2,3,4,5,6,7,8,9";
const digits = x => str(x).split('')
const getDigits = (x,start,length = digits(x).length) => digits(x).splice(start,length)
const digitSum = x => sumArray(stringToInt(digits(x)))

//prime functions
const isPrime = rf(
    (x,next = 2) => {
        if (x == 1) return false
        return (x % next == 0) ? false:(next > Math.sqrt(x)) ? true:["CALL",x,next+1] 
    }
)


const isEmirp = x => (!isPrime(x)) ? false:isPrime(reverseNum(x))
const isWilsonPrime = x => (x == 5 || x == 13 || x == 563)

const primesUpTo = rf (
    (x, factor = 2, index = factor*2, p = Array(x+1).fill(true,2,x)) => {
        if (factor > x) return boolToIndex(p)
        if (index > x) return ["CALL",x,factor+1,(factor+1)*2,p]
        if (index < x) p[index] = false
        return ["CALL",x,factor,index+factor,p]
    }
)

const isSuperPrime = (x,thing) => {
    if (!isPrime(x)) return false
    return isPrime(primesUpTo(x).length+1)
}

const isTwinPrime = x => {
    if (!isPrime(x)) return false
    if (isPrime(x+2)) return x+2
    if (isPrime(x-2)) return x-2
    return false
}

//factor function
const getFactors = rf(
    (x, facts = [], count = 1) => {
        if (Math.sqrt(x) < count) return facts
        if (isInt(x/count)) facts.push(count,x/count)
        return ["CALL",x,facts,count+1]
    }
)

const factorSum = (x) => sumArray(getFactors(x))

const getPrimeFacts = rf(
    (x, facts = [], check = 2) => {
        if (x == 1) return facts
        if (isInt(x/check)) {
            facts.push(check)
            x /= check
            return ["CALL",x,facts,check]
        }
        return ["CALL",x,facts,check+1]
    }
)

const getPowers = rf (
    (x,powers = [],b = 2) => {
        if (b > Math.log2(x)) return powers
        if (isInt(x**(1/b))) powers.push([x**(1/b),b])
        return ["CALL",x,powers,b+1]
    }
)

const isAbudant = x => factorSum(x) >  2*x;
const isPerfect = x => factorSum(x) == 2*x;
const isDeficent = x => factorSum(x) < 2*x;

//having to due with digits
const isKeith = rf(
    (x,digs = digits(x)) => {
        const sum = sumArray(stringToInt(digs))
        if (sum == x) return true
        if (sum > x) return false
        digs.push(sum)
        return ["CALL",x,rest(digs)]
    }
)

const isHappy = rf(
    x => {
        if (x == 1 || x == 145) return x == 1
        x = sumArray(digits(x).map(x => x*x))
        return ["CALL",x]
    }
)

const isPolyDivisible = rf(
    (x,divisor = 1) => {
        if (divisor > digits(x).length) return true
        if (!isInt(getDigits(x,0,divisor).join("")/divisor)) return false
        return ["CALL",x,divisor+1]
    }
)

const isNarcissistic = x => x == sumArray(digits(x).map(n => Math.pow(n,digits(x).length)))
const isSmith = x => digitSum(x) == sumArray(getPrimeFacts(x).map(x => digitSum(x)))
const isPowerful = x => getPrimeFacts(x).every(p => isInt(x/(p*p)))
const isAchilles = x => isPowerful(x) && (getPowers(x).length < 1)
const isSphenic = x => getPrimeFacts(x).length == 3 && !isDuplicate(getPrimeFacts(x))
const isAutomorphic = x => digits(x*x).slice(digits(x).length).toString() == str(digits(x))
const isHarshad = x => isInt(x/digitSum(x))
const isPronic = x => Math.floor(Math.sqrt(x))*Math.ceil(Math.sqrt(x)) == x
const isMersenne = x => isInt(Math.log2(x+1))
const isFermat = x => isInt(Math.log2(Math.log2(x-1)))

const isOre = x => {
    const sum = getFactors(x).reduce((accum,curr) => accum + curr**-1)
    return isInt(Math.floor((getFactors(x).length/sum)*100000)/100000) //flaoting poaint error, maybe fix with fraction addition
}

const isKaprekar = rf(
    (x,index = 0) => {
        if (index > digits(x).length) return false
        if (x == toInt(sumArray(getDigits(x**2,0,index))) + toInt(sumArray(getDigits(x**2,index)))) return true
        return ["CALL",x,index+1]
    }
)


const toRomanNumeral = x => {
    if (x > 3999) return "Romans can't count this high";
    const numerals = "IVXLCDM".split("")
    return digits(x).slice(-4).reverse().map((n,index) => {
        if (n == 0) return ""
        const offset = (n > 5) ? 2:1;
        let str = (n >= 5) ? numerals[index*2+1]:""
        if (n%5 == 4) str = numerals[index*2] + numerals[index*2 + offset] //there is a subtraction ex IV IX
        else str += numerals[index*2].repeat(n%5)
        return str
    }).reverse().join("")
}

const isInSeq = (build,seed) => rf((x,seq = seed) => {
    if ((index = seq.indexOf(x)) > -1) return index
	if (tail(seq) > x) return false
    //log(seq,build(seq))
    seq.push(build(seq))
	return ["CALL",x,seq]
})

const fib = seed => tail(seed,1) + tail(seed,2)
const padovan = seed => tail(seed,2) + tail(seed,3)
const jacobsthal = seed => tail(seed,1) + 2*tail(seed,2)
const leonardo = seed => tail(seed,1) + tail(seed,2) + 1
const catalan = seed => (4*seed.length+2)/(seed.length+2) * tail(seed,1)
const lazyCaterers = seed => {
    const i = Math.sqrt(2*tail(seed) - (7/4)) - 0.5;
    return ((i+1)*(i+1) + (i+1) + 2)/2
}
const lookAndSay = seed => {
    const res = digits(tail(seed)).reduce((accum,val,index) => {
        accum.str += (accum.last != val) ? accum.count + accum.last:"";
        accum.count = (accum.last == val) ? accum.count+1:1;
        accum.last = val
        return accum
    },{"str":"" , "count":0, "last":digits(tail(seed))[0] })
    return toInt(res.str + res.count + res.last)
}

const inFib = isInSeq(fib,[0,1])
const inLucas = isInSeq(fib,[2,1])
const inPadovan = isInSeq(padovan,[1,1,1])
const inJacobsthal = isInSeq(jacobsthal,[0,1])
const inLeonardo = isInSeq(leonardo,[1,1])
const inCatalan = isInSeq(catalan,[1])
const inLookAndSay = isInSeq(lookAndSay,[1])
const inLazyCaterers = isInSeq(lazyCaterers,[1])

module.exports = {
    isEven,
    isPrime,
    isEmirp,
    isSuperPrime,
    isTwinPrime,
    isWilsonPrime,
    primesUpTo,
    factorSum,
    getPowers,
    isAbudant,
    getFactors,
    getPrimeFacts,
    isPerfect,
    isDeficent,
    isKeith,
    isHappy,
    isPolyDivisible,
    isNarcissistic,
    isSmith,
    isAutomorphic,
    isAchilles,
    isMersenne,
    isFermat,
    toRomanNumeral,
    isPowerful,
    isOre,
    isSphenic,
    isKaprekar,
    isHarshad,
    isPronic,
    inFib,
    inLucas,
    inPadovan,
    inJacobsthal,
    inLeonardo,
    inCatalan,
    inLookAndSay,
    inLazyCaterers
}