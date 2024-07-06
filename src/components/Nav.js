import { Link } from "react-router-dom"

function Nav() {
    return (
        <div>
            <div className="hidden md:block">
                <Link className="font-bold text-none my-[12px] mx-[12px] p-[8px] rounded-[12px] text-[700] text-4xl mb-[34px]" to="/">V</Link>
                <Link className="block text-none mx-0 p-[8px] rounded-[12px] links mt-[24px]" to="/">home</Link>
                <Link className="block text-none mx-0 my-[12px] p-[8px] rounded-[12px] links" to="/about">about</Link>
                <Link className="block text-none mx-0 my-[12px] p-[8px] rounded-[12px] links" to="/project">projects</Link>
            </div>
            <div className="block md:hidden mt-[32px] mb-[22px]">
                <Link className="text-none mx-[12px] my-[12px] p-[8px] links rounded-[12px]" to="/">home</Link>
                <Link className="text-none mx-[12px] my-[12px] p-[8px] links rounded-[12px]" to="/about">about</Link>
                <Link className="text-none mx-[12px] my-[12px] p-[8px] links rounded-[12px]" to="/project">projects</Link>
            </div>
        </div>
    );
}

export default Nav;