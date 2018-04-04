	let RecMath = {
	"handler":{
		get: function(target, name) {
			//console.log(name)
			name = name.toLocaleLowerCase()
			if (name == "n") return target.n
			if (name in target.data) return target.data[name]
			if (!((name in RecMath.funcs)||(name.substr(3) in RecMath.sequences))) throw(name + " Not a Vaild Property Name")
			if(name.substr(0,3) == "sq_") { //handle sequences
				const sq = RecMath.sequences[name.substr(3)];
				do {
					//build the sequence
					sq.seed.push(sq.build())
					//check to see if it is in the seqence
					if (sq.seed.indexOf(target.n) != -1) return sq.seed.indexOf(target.n);
				}while (target.n > sq.seed[sq.seed.length-1])
				return target.n == sq[sq.seed.length-1];
			}
			target.data[name] = RecMath.funcs[name](RecMath.num(target))
			return target.data[name]
		}
	},
	"num":function (n) {
		if (typeof n == "number"){
			return new Proxy({n:n,data:{}},RecMath.handler)
		}else if(typeof n == "object"){
			return new Proxy(n,RecMath.handler)
		}
	},
	"sequences":{
		"fibonacci":{
			seed:[0,1,1],
			build:function () {
				let l = this.seed
				return l[l.length-1] + l[l.length-2]
			}
		},
		"lucas":{
			seed:[2,1],
			build:function () {
				l = this.seed
				return l[l.length-1] + l[l.length-2]
			}
		},
		"padovan":{
			seed:[1,1,1],
			build:function () {
				l = this.seed
				return l[l.length-3] + l[l.length-2]
			}
		},
		"jacobsthal":{
			seed:[0,1],
			build:function () {
				l = this.seed
				return l[l.length-1] + 2*l[l.length-2]
			}
		},
		"leonardo":{
			seed:[1,1],
			build:function () {
				l = this.seed
				return l[l.length-1] + l[l.length-2] + 1
			}
		},
		"pell":{
			seed:[0,1],
			build:function () {
				l = this.seed
				return 2*l[l.length-1] + l[l.length-2]
			}
		},
		"catalan":{
			seed:[1],
			build:function () {
				l = this.seed
				foo = l.length-1
				var sum = 0
				for (var i=0;i<=foo;i++) {	
					sum += l[i]*l[foo-i]
				}
				return sum
			}
		},
		"lookandsay":{
			seed:["1","1"],
			build:function () {
				l = this.seed
				on = l.length-1
				count = 1
				dig = l[on].split("")
				next = ""
				for (var i=1;i<=dig.length-1;i++){
					if (dig[i-1] == dig[i]) {
						count++
					}else {
						next += (count).toString() + dig[i-1]
						count = 1
					}
				}
				next += count.toString() + dig[dig.length-1]
				return next
			}
		},
		"lazy_caterers":{
			seed:[1],
			build:function(){
				let last = this.seed[this.seed.length-1]
				let i = Math.sqrt(2*last - (7/4)) - 0.5;
				return ((i+1)*(i+1) + (i+1) + 2)/2
			}
		}
	},
	"funcs":{
		"even":function(num){
			return (num.n%2 === 0);
		},
		"prime":function(num){
			for (let i=2;i<=num.n/2;i++) {
				if (num.n%i === 0) return false
			}
			return true
		},
		"emirp":function(num){
			if (!num.prime) return false
			let rev = new RecMath.num(+num.n.toString().split('').reverse().join(''))
			return rev.prime
		},
		"wilson_prime":function(num){
			return (num.n == 5 || num.n ==13 || num.n == 563)
		},
		"super_prime":function(num){
			if (!num.prime) return false
			len = new RecMath.num(RecMath.generate_primes(num.n).length) //get the prime index
			return len.prime
		},
		"pandigital":function(num){
			return n.toString().split("").sort(function(a, b){return a-b}).toString() == "1,2,3,4,5,6,7,8,9"
		},
		"abundant":function(num){
			return (num.factorsum > 2*num.n)
		},
		"perfect":function(num){
			return (num.factorsum == 2*num.n)
		},
		"almost_perfect":function(num){
			return (num.factorsum+1 == 2*num.n)
		},
		"keith":function(num){
			let n = num.n
		  let arr = n.toString().split("")
			const numOfDigits = arr.length
			let sum = 0
			while(sum < n){
				sum = 0
				for (i=arr.length-numOfDigits;i<arr.length;i++){ //add the last numOfDigits of the array
					sum += +arr[i]
				}
				arr.push(sum)
				if(n==sum) return true
				}
			return false
		},
		"narcissistic":function (num) {
			let digits = num.n.toString().split("");
			let sum = 0;
			for (i=0;i<=digits.length-1;i++) {
				sum += Math.pow(+(digits[i]),digits.length);
			}
			return sum==num.n
		},
		"happy":function (num) {
			n = num.n
			while (n != 1 && n != 145) {
				let digits = n.toString().split("");
				n = 0
				for (i=0;i<=digits.length-1;i++){
					n += Math.pow(digits[i],2)
				}
			}
			return n==1
		},
		"smith":function (num) {
			const digitSum = num.n.toString().split("").reduce((a, b) => +a + +b, 0) //add all the digits
			let primeSum = 0
			for (var i in num.primefactors){
				//add all the digits of all the primefactors
				primeSum += i.toString().split("").reduce((a, b) => +a + +b, 0) * num.primefactors[i] 
			}
			return primeSum == digitSum
		},
		"powerful":function (num){
			for (let i in num.primefactors) {
				if (num.n%(i*i) !== 0) return false
			}
			return true
		},
		"achilles":function(num) {
			if (!num.powerful) return false
			return num.roots.length < 1
		},
		"automorphic":function(num) {
			return +(num.n*num.n).toString().substr((Math.floor(Math.log10(n))+1) * -1) == n
		},
		"polydivisible":function(num) {
			for (let i=2;i<=Math.floor(Math.log10(num.n))+1;i++){
				if (+(num.n.toString().substr(0,i))%i !== 0) return false
			}
			return true
		},
		"ore":function (num) {
			let sum = 0
			for (let i in num.factors) {
				sum += 1/num.factors[i]
			}
			const harm = Math.floor((num.factors.length/sum)*10000)/10000 //floating point error!!!!!
			return harm == ~~harm
		},
		"sphenic":function (num) {
			let c = 0
			for (let i in num.primefactors) {
				if (num.primefactors[i] != 1) return false
				c++
			}
			return c==3
		},
		"kaprekar":function (num) {
			const digs = (num.n * num.n).toString()
			for (let i=1;i<=digs.length;i++) {
				if (+(digs.substr(0,i)) + +digs.substr(i) == n) return true
			}
			return false
		},
		"harshad":function (num) {
			let digs = num.n.toString().split("")
			let sum = 0
			for (let i in digs) {
				sum += +digs[i]
			}
			return (n%sum === 0)
		},
		"mersenne":function (num){
			return Math.log2(num.n+1) == Math.floor(Math.log2(num.n+1))
		},
		"fermat":function (num){
			return ~~Math.log2(Math.log2(num.n-1)) == Math.log2(Math.log2(num.n-1))
		},
		"pronic":function (num) {
			let f = num.factors
			for (let i in f) {
				if (f[i-1]+1 == f[i] && f[i-1] * f[i] == n) return true
			}
			return false
		},
		"factors":function (num){
			let facts = []
			for (let i=1;i<=Math.sqrt(num.n);i++){
				if (num.n/i == Math.floor(num.n/i)) {
					facts.push(i,num.n/i);
				}
			}
			facts.sort(function(a, b){return a-b});
			return facts
		},
		"factorsum":function (num){
			let sum = 0;
			let facts = num.factors
			for (let i in facts) {
				sum += facts[i]
			}
			return sum
		},
		"primefactors":function (num){
			let pFacts = {};
			let n = num.n;
			let flag = true
			for (var i=2;i<=num.n/2;i++){
				while (n%i === 0) {
					pFacts[i] = (pFacts[i] === undefined) ? 1:pFacts[i]+1;
					n /= i
					flag = false
				}
			}
			if (flag) pFacts[num.n] = 1 //it is prime
			return pFacts;
		},
		"roots":function (num) {
			var r = []
			for (let power = 2;power <= Math.ceil(Math.log2(num.n));power++){
				if (Math.pow(num.n,1/power) == ~~Math.pow(num.n,1/power)){
					r.push({"power":power,"root":Math.pow(num.n,1/power)})
				}
			}
			return r
		},
		"twin_prime":function(num){
			if (RecMath.num(num.n+2).prime) return num.n+2
			if (RecMath.num(num.n-2).prime) return num.n-2
			return false
		},
		"amicable":function (num) {
			if (num.n == RecMath.num(num.factorsum-num.n).factorsum-(num.factorsum-num.n)) return num.factorsum-num.n
			return false
		},
		"antifactorial":function (num){
			let fac = 1;
			let count = 1;
			while (num.n>=fac) {
				if (num.n==fac) return count
				count++;
				fac *= count
			}
			return false;
		},
		"roman_numeral":function (num){
			if (num.n > 499999999) return "Romans can't count this high"
			let r = "IVXLCDM".split("")
			let digits = num.n.toString().split("")
			let segments = [digits.splice(-3).reverse(),digits.splice(-2).reverse(),digits.splice(-4).reverse()]
			let res = []
			for (let i in segments) {
				let str = ""
				for (let j in segments[i]){
					let d = segments[i][j]
					if (d == 9){
						str = r[j*2] + r[j*2+2] + str;
						d = 0;
					}else if(d>=5){
						str = r[j*2+1] + str;
						d %= 5
					}else if(d == 4){
						str = r[j*2] + r[j*2+1] + str
						d = 0
					}
					str = r[j*2].repeat(d)+str;
				}
				res[i] = str
			}
			str = res[0]
			if (res[1]) str = "<o>" + res[1] + "</o>" + str
			if (res[2]) str = "|" + res[2] + "|" + str
			return str
		},
		"eygptian":function (num) {
			if (num.n > 10000000) return "Eygptians cant count this high"
			let data = {}
			for (let i=1000000;i>=1;i/=10){
				const val = Math.floor(num.n/i)
				data[i] = +val.toString()[val.toString().length-1] //get the last digit
			}
			return data
		},
		"mayan":function (num){
			let result = []
			let n = num.n
			while (n > 0){
				let digit = n%20
				n = ~~(n/20)
				result.push({1:digit%5,5:~~(digit/5)})
			}
			return result.reverse()
		},
		"polygon":function (num){
			var poly = 0;
			let count = 0;
			while (poly<=num.n) {
				if (poly == num.n) return {3:count};
				count++;
				poly += count;
			}
			return false;
		}
	},
	"roman_numeral_setting":false, //add two setting for roman numerals
	"base_change":function (num,b){
		var Schroeppel2 = 0xAAAAAAAA;
		var Schroeppel4 = 0xCCCCCCCC;
		if (b == -4) return ((+num.n + Schroeppel4 ) ^ Schroeppel4 ).toString(4);
		if (b == -2) return ((+num.n + Schroeppel2 ) ^ Schroeppel2 ).toString(2);
		if (b<=1 || b>=65) return "Invalid Base";
		const s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/".split("");
		let n = num.n;
		var f = "";
		while (n>0) {
			f = s[n%b].concat(f);
			n=Math.floor(n/b);
		}
		return f
	},
	"generate_primes":function (num){
		var p = []
		for (var i=0;i<=num;i++){
			p[i] = true
		}
		for (i=2;i*i<=num;i++){
			if(p[i]){
				for (j=i*2;j<=num;j+=i){
					p[j] = false
				}
			}
		}
		let primes = []
		for (i in p){
			if (p[i] && +i !== 0 && +i != 1) primes.push(+i)
		}
		return primes
	},
	"number_systems":["roman_numeral","egyptian","mayan"]
}
