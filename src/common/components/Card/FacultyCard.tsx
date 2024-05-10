import type { IFacultyV2 } from "@/interfaces/faculty.interface";

interface Props {
    faculty: IFacultyV2;
}

const FacultyCard = (props: Props) => {
    const { faculty } = props;
    const { slug, title, picture, academic_rank, staff_type } = faculty;

    const academicName = {
        assistant: "Assistant Professor",
        associate: "Associate Professor",
        professor: "Professor",
        none: "",
    };

    return (
        <a
            href={`/directory/${slug}`}
            className="border border-gray-300 shadow-sm"
        >
            <figure>
                <img
                    className="w-full aspect-square"
                    src={
                        picture
                            ? picture
                            : "https://via.placeholder.com/640x640.webp"
                    }
                    alt={title}
                />
            </figure>
            <div className="p-2.5 font-kanit md:p-5">
                <h2 className="text-base font-medium md:text-2xl">{title}</h2>
                <p className="text-xs text-gray-400 md:mt-2 md:text-base capitalize">
                    {academic_rank
                        ? academicName[
                              academic_rank as keyof typeof academicName
                          ]
                        : staff_type}
                </p>
            </div>
        </a>
    );
};

export default FacultyCard;
