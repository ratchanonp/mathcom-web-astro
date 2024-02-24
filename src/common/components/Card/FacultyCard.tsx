import type { Faculty } from "src/interfaces/faculty.interface";

interface Props {
  faculty: Faculty;
}

const FacultyCard = (props: Props) => {
    const { faculty } = props;
    const { nameEng, academicRank, imgURL, id } = faculty;

    return (
        <a
            href={`directory/${id}`}
            className="border-[1px] border-gray-300 shadow-sm"
        >
            <figure>
                <img src={imgURL} alt="Chat" />
            </figure>
            <div className="p-2.5 font-kanit md:p-5">
                <h2 className="text-base font-medium md:text-2xl">{nameEng}</h2>
                <p className="text-xs text-gray-400 md:mt-2 md:text-base">
                    {academicRank.eng}
                </p>
            </div>
        </a>
    );
};

export default FacultyCard;
