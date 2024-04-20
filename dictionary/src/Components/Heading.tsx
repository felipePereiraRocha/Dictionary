import { FaGithub } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";

export function Header(){
    return(
        <div className="top-0 flex flex-row justify-around shadow p-2 bg-white">
            <h1 className="font-bold text-3xl">FreeDictionaryAPI</h1>
            <ul className="flex flex-row font-bold gap-2 text-2xl">
                <li><a className="flex flex-row items-center" href="https://github.com/felipePereiraRocha/Dictionary"><FaGithub/>Github repo</a></li>
                <li><a className="flex flex-row items-center" href="https://dictionaryapi.dev/"><FaBook/>API Link</a></li>
            </ul>
        </div>
    );
}