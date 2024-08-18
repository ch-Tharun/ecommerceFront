
async function useFetch(url) {
    const info= await fetch(url);
    const res= await info.json();
    console.log(res);
    return res;
}

export default useFetch;