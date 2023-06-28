/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type QueryFormInputValues = {
    Field0?: string;
};
export declare type QueryFormValidationValues = {
    Field0?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QueryFormOverridesProps = {
    QueryFormGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type QueryFormProps = React.PropsWithChildren<{
    overrides?: QueryFormOverridesProps | undefined | null;
} & {
    onSubmit: (fields: QueryFormInputValues) => void;
    onChange?: (fields: QueryFormInputValues) => QueryFormInputValues;
    onValidate?: QueryFormValidationValues;
} & React.CSSProperties>;
export default function QueryForm(props: QueryFormProps): React.ReactElement;
