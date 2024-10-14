export interface getNodoDto {
  id: number;
  node: string;
  value: number;
  nodeList?: getNodoDto[];
}