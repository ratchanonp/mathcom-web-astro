import type { IFacultyV2 } from "@/interfaces/faculty.interface";

interface Props {
	faculty: IFacultyV2;
}

const FacultyCard = (props: Props) => {
	const { faculty } = props;
	const { slug, title, picture, academic_rank, staff_type, first_name_thai, last_name_thai } = faculty;

	const academicName = {
		assistant: "ผู้ช่วยศาสตราจารย์",
		associate: "รองศาสตราจารย์",
		professor: "ศาสตราจารย์",
		none: "",
	};

	const staff_type_th = {
		faculty: "อาจารย์",
		graduate: "นิสิตบัณฑิตศึกษา",
		staff: "เจ้าหน้าที่",
	};

	return (
		<a href={`/th/people/${slug}`} className="border border-gray-300 shadow-sm">
			{picture ? (
				<figure>
					<img className="aspect-square w-full object-cover object-top" src={picture} alt={title} />
				</figure>
			) : (
				<div className="flex aspect-square w-full items-center justify-center bg-gray-200">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="h-20 w-20 text-white"
					>
						<path
							fillRule="evenodd"
							d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
			)}
			<div className="p-2.5 font-kanit md:p-5">
				<h2 className="text-base font-medium md:text-2xl">
					{first_name_thai} {last_name_thai}
				</h2>
				<p className="text-xs capitalize text-gray-400 md:mt-2 md:text-base">
					{academic_rank
						? academicName[academic_rank as keyof typeof academicName]
						: staff_type_th[staff_type as keyof typeof staff_type_th]}
				</p>
			</div>
		</a>
	);
};

export default FacultyCard;
