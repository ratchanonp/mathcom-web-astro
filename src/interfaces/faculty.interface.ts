/* eslint-disable no-unused-vars */
export class AcademicRank {
    private constructor(
    public readonly eng: string,
    public readonly th: string,
    public readonly thAbbr: string,
    public readonly priority: number,
    ) {}

    public static AssistantProfessor = new AcademicRank(
        "Assistant Professor",
        "ผู้ช่วยศาสตราจารย์",
        "ผศ.",
        2
    );
    public static AssociateProfessor = new AcademicRank(
        "Associate Professor",
        "รองศาสตราจารย์",
        "รศ.",
        1
    );
    public static Professor = new AcademicRank("Professor", "ศาสตราจารย์", "ศ.",0);

    public toString(): string {
        return this.eng;
    }
}

export enum StaffType {
  Faculty = "Faculty",
  EmeritusFaculty = "Emeritus Faculty",
  GraduateStudent = "Graduate Students",
  PostDocsResearcher = "Post-Docs & Researchers",
  Staff = "Staff",
}

export interface Education {
  year: number;
  degree: string;
  university: string;
}

export enum ResearchField {
  Geometry_Topology = "Geometry & Topology",
  Analysis_NumericalTheory_DifferentialEquations = "Analysis, Numerical Theory, & Differential Equations",
  Algebra_DiscreteMathematics_MathematicalLogic = "Algebra, Discrete Mathematics, & Mathematical Logic",
  Statistics_Probability_StochasticProcess = "Statistics, Probability & Stochastic Process",
  AppliedMathematics_MathematicalModelling = "Applied Mathematics & Mathematical Modelling",
  Optimization_OperationsResearch_GraphAndNetworkAnalysis = "Optimization, Operations Research, & Graph and Network Analysis",
  FinancialMath_ActuarialScience = "Financial Math & Actuarial Science",
  DataScienceMachineLearning = "Data Science & Machine Learning",
  ImageProcessing_ComputerVision = "Image Processing & Computer Vision",
  Bioinformatics_ComputationalBiology = "Bioinformatics & Computational Biology",
  SoftwareEngineering_DatabaseSystems_ParallelComputing = "Software Engineering, Database Systems, & Parallel Computing",
  NetworkSecurity_Cryptography = "Network Security & Cryptography",
}

export interface Faculty {
  id: string;
  imgURL: string;
  nameEng: string;
  nameTH: string;
  isPhD: boolean;
  academicRank: AcademicRank;
  staffType: StaffType;

  office: string;
  phone: string;
  fax: string;
  email: string;

  education: Education[];

  researchFields: ResearchField[];

  publications: string[];
}
