import {
    AcademicRank,
    ResearchField,
    StaffType,
    type Faculty,
} from "@/interfaces/faculty.interface";

export const faculties: Faculty[] = [
    {
        id: "chatchawit-a",
        imgURL:
      "https://d2ijd3g5wqapxj.cloudfront.net/wp-content/uploads/2019/05/Chatchawit-Aporntewan-1-5.jpg",
        nameEng: "Chatchawit Aporntewan",
        nameTH: "ชัชวิทย์ อาภรณ์เทวัญ",
        isPhD: true,
        academicRank: AcademicRank.AssociateProfessor,
        staffType: StaffType.Faculty,

        office: "MATH 1309/17",
        phone: "0819201977",
        fax: "02-255-2287",
        email: "Chatchawit.A@chula.ac.th",

        education: [
            {
                year: 2004,
                degree: "Ph.D.",
                university: "(Computer Engineering) Chulalongkorn University, Thailand",
            },
            {
                year: 1999,
                degree: "M.Eng.",
                university: "(Computer Engineering) Chulalongkorn University, Thailand",
            },
            {
                year: 1997,
                degree: "B.Eng.",
                university: "(Computer Engineering) Chulalongkorn University, Thailand",
            },
        ],

        researchFields: [ResearchField.BioinformaticsComputationalBiology],
        publications: [],
    },
    {
        id: "jaruloj-c",
        imgURL:
      "https://d2ijd3g5wqapxj.cloudfront.net/wp-content/uploads/2019/05/jaruloj_640x640-1-5.jpg",
        nameEng: "Jaruloj Chongstitvatana",
        nameTH: "จารุโลจน์ จงสถิตย์วัฒนา",
        isPhD: true,
        academicRank: AcademicRank.Professor,
        staffType: StaffType.EmeritusFaculty,

        office: "MATH 1208/11",
        phone: "02-218-5152",
        fax: "02-255-2287",
        email: "jaruloj@gmail.com",

        education: [
            {
                year: 1998,
                degree: "Ph.D.",
                university: "(Computer Science) Michigan State University, USA",
            },
            {
                year: 1989,
                degree: "M.S.",
                university: "(Computer Science) Michigan State University, USA",
            },
            {
                year: 1986,
                degree: "B.Eng.",
                university: "(Computer Engineering) Chulalongkorn University, Thailand",
            },
        ],

        researchFields: [ResearchField.DataScienceMachineLearning, ResearchField.GraphNetworkAnalysis, ResearchField.Algebra],

        publications: [],
    },
];
