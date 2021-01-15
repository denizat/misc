function stoi(str: string, base: number = 10): number {
    var out:number = 0;
    for(var i = 0; i < str.length; i++) {
        out += (str.charCodeAt(i) - 48)*base**(str.length-i-1);
    }
    return out;
}
