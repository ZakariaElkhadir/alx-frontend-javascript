function createInt8TypedArray(length, position, value){
    const buffer = new ArrayBuffer(length);
    const int8view = new Int8Array(buffer);

    if (position >= length || position < 0) {
        throw Error('Position outside range');
    }

    int8view[position] = value;

    return{
        "byteLength": int8view.length,
        "byteoffset": int8view.byteOffset,
        "buffer": buffer

        
    }
}
export default createInt8TypedArray;