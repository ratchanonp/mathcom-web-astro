import type { IFaculty } from "@/interfaces/faculty.interface";
import { MediaAPI } from "@/libs/api/media";
import { useEffect, useState } from "react";


interface Props {
  faculty: IFaculty;
}

const FacultyCard = (props: Props) => {
    const { faculty } = props;
    const { first_name_eng, last_name_eng, slug, picture } = faculty;
    const full_name = `${first_name_eng} ${last_name_eng}`;

    const [mediaURL, setMediaURL] = useState<string>("");

    useEffect(() => {
        const fetchMedia = async () => {
            const mediaAPI = new MediaAPI();
            const data = await mediaAPI.getMediaURL(picture);
            setMediaURL(data);
        };

        fetchMedia();

    }, [faculty.picture]);

    return (
        <a
            href={`directory/${slug}`}
            className="border border-gray-300 shadow-sm"
        >
            <figure>
                <img src={mediaURL ? mediaURL : "https://via.placeholder.com/640x640.webp"}  alt={full_name}/>
            </figure>
            <div className="p-2.5 font-kanit md:p-5">
                <h2 className="text-base font-medium md:text-2xl">{first_name_eng}  {last_name_eng}</h2>
                {/* <p className="text-xs text-gray-400 md:mt-2 md:text-base">
                    {academicRank.eng}
                </p> */}
            </div>
        </a>
    );
};

export default FacultyCard;
