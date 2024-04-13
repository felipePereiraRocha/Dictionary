import { useEffect, useState } from "react";

export function WordSearch(){

    const [searchedWord, setSearchedWord] = useState<string>("Hello")
    const [errorMessage, setErrormessage] = useState<string>("");
    const [definitions, setDefinitions] = useState<string[]>([]);

    useEffect(() => {
        getWordDefinitions()
    },[searchedWord])


    const fetchWordDefinitions = async (word: string) => {
        console.log(`Making request for definitions of ${word}...`);
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const json = await response.json();
        return json[0].meanings
            .flatMap((m: { definitions: any; }) => m.definitions)
            .flatMap((d: { definition: any; }) => d.definition)
    };
    
    const getWordDefinitions = () => {
        const inputInfo:HTMLInputElement = document.querySelector("#wordInput")!;
        setSearchedWord(inputInfo.value);
        const word = searchedWord;
        if (word == null || word == '') {
            return alert('Error: You must enter a word to fetch');
        }
        fetchWordDefinitions(word)
        .then(newDefinitions => {
            setDefinitions(newDefinitions);
        })
        .catch(_=> {
            setErrormessage(`Error: Could not retrieve any definitions for ${word}`)
            console.error(errorMessage)
        });
    };


    return(
        <div className="flex flex-col mx-auto my-32 w-2/3 border-black border-2 rounded-lg gap-1 p-3 shadow-xl bg-white">
            <legend className="text-center text-3xl font-bold">Search for a word</legend>
            <input defaultValue={"Hello"} type="text" id="wordInput" className="border-2 rounded-sm border-black shadow-md bg-sky-50
                                                                                    font-sans font-lg"></input>
            <button className="border-black border-2 rounded bg-sky-500 text-white drop-shadow" onClick={getWordDefinitions}>Search Word</button>
            <div className="text-center bg-sky-900 text-white p-3 rounded-md
                                    font-sans italic
                                selection:text-black selection:bg-white
                                scale-transition">{definitions.map((definition) => <p key={crypto.randomUUID()}>{definition}</p>)}
            </div>
        </div>
    );
}