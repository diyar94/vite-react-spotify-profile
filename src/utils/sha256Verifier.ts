export const sha256Verifier = async (plain: string) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);

    return window.crypto.subtle.digest('SHA-256', data);
}
