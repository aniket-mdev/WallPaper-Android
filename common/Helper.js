const Headers = () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjVkOWMxMmRiY2RmZGM4MmY1OWMyMTFiIiwidXNlcl90eXBlIjoiYWRtaW5fdXNlciIsImV4cCI6MzYwMDAwMDAwMDAwMCwiaWF0IjoxNzA5NDQ1Mjk3LCJpc3MiOiJ5ZGhud2IifQ.aCPNmZ6EDwkNadz63030e-011Qbb7GvHxMMLzAMiQhY"
    const headers = {
        "Content-Type": "application/json",
        Authorization: token,
    };

    return headers
}
export const getHeaders = Headers()