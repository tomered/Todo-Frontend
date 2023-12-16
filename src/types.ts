import { SxProps } from "@mui/system";

export interface TodoTask{
    description: string
}

export type extandedSxProps = {
    [key: string]: string | number | SxProps;
}