export const base64UrlEncode = (input: ArrayBuffer) => {
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(input)]))
        .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
