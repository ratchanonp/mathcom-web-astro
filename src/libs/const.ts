import { ResearchField } from "src/interfaces/faculty.interface";
import { SortBy } from "src/interfaces/sortBy.interface";

export interface IResearch<T> {
    name: string;
    value?: T;
    img?: string;
    subCategory?: IResearch<T>[];
}

export const researchFields: IResearch<ResearchField>[] = [
    {
        name: "Mathematics",
        subCategory: [
            {name: "Geometry & Topology", value: ResearchField.Geometry_Topology, img: "/research/geometry.png"},
            {name: "Analysis, Numerical Theory, & Differential Equations", value: ResearchField.Analysis_NumericalTheory_DifferentialEquations, img: "/research/numberical.png"},
            {name: "Algebra, Discrete Mathematics, & Mathematical Logic", value: ResearchField.Algebra_DiscreteMathematics_MathematicalLogic, img: "/research/algebra.png"},
            {name: "Statistics, Probability & Stochastic Process", value: ResearchField.Statistics_Probability_StochasticProcess, img: "/research/statistic.png"},
            {name: "Applied Mathematics & Mathematical Modelling", value: ResearchField.AppliedMathematics_MathematicalModelling, img: "/research/applied.png"},
            {name: "Optimization, Operations Research, & Graph and Network Analysis", value: ResearchField.Optimization_OperationsResearch_GraphAndNetworkAnalysis, img: "/research/graph.png"},
        ],
    },
    {
        name: "Computer Science",
        subCategory: [
            {name: "Data Science & Machine Learning", value: ResearchField.DataScienceMachineLearning, img: "/research/machine-learning.png"},
            {name: "Image Processing & Computer Vision", value: ResearchField.ImageProcessing_ComputerVision, img: "/research/image-processing.png"},
            {name: "Bioinformatics & Computational Biology", value: ResearchField.Bioinformatics_ComputationalBiology, img: "/research/bioinformatics.png"},
            {name: "Software Engineering, Database Systems, & Parallel Computing", value: ResearchField.SoftwareEngineering_DatabaseSystems_ParallelComputing, img: "/research/database.png"},
            {name: "Network Security & Cryptography", value: ResearchField.NetworkSecurity_Cryptography, img: "/research/cryptography.png"},
        ]
    }
];

export const sortBy: IResearch<SortBy>[] = [
    {
        name: "Firstname",
        subCategory: [
            {name: "Firstname A-Z", value: SortBy.A_Z},
            {name: "Firstname Z-A", value: SortBy.A_Z},
           
        ],
    },
    {
        "name": "Lastname",
        subCategory: [
            {name: "Lastname A-Z", value: SortBy.A_Z},
            {name: "Lastname Z-A", value: SortBy.A_Z},
        ],
    }
];