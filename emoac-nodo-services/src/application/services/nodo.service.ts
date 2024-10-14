import { Inject, Injectable } from "@nestjs/common";
import { Nodo } from "src/domain/entities/nodo.entity";
import { NodoRepository } from "src/domain/repositories/nodo.repository.interface";
import { getNodoDto } from "src/interfaces/dto/get-nodos.dto";

@Injectable()
export class NodoService {
  constructor(
    @Inject('NodoRepository') private readonly nodoRepository: NodoRepository,
  ) { }

  getNodos = async (): Promise<Nodo[]> => {
    try {
      let nodosResponse: Nodo[];
      nodosResponse = await this.nodoRepository.findAll();
      return nodosResponse;
    } catch (error) {
      console.error('error al obtener los nodos, revisar json en el repositorio.')
      return null;
    }
  }

  convertArrayOfNodoToArrayOfGetNodoDto = async (nodos: Nodo[]): Promise<getNodoDto[]> => {
    try {
      if (!nodos || nodos.length === 0) {
        console.warn('nodos no encontrados para poder procesar la solicitud')
        return null;
      }

      let nodosResponse: getNodoDto[] = [];

      nodos?.forEach((nodo): void => {
        let currentNodo = this.mapNodeToGetNodeDto(nodo, nodos);
        nodosResponse.push(currentNodo);
      })

      return this.getParentNodes(nodosResponse);
    } catch (error) {
      console.error('Error al procesar la lista de nodos')
      return null;
    }
  }

  private mapNodeToGetNodeDto(nodo: Nodo, nodos: Nodo[]): getNodoDto {
    let nodoResponse: getNodoDto = {
      id: nodo.id,
      node: nodo.node,
      value: nodo.value,
      nodeList: undefined,
    }

    if (nodo.nodeList && nodo.nodeList.length > 0) {
      nodoResponse.nodeList = nodo.nodeList.map((id): getNodoDto => {
        const childNodoFinded = nodos.find((childNode): boolean => childNode.id === id);
        if (childNodoFinded) {
          return this.mapNodeToGetNodeDto(childNodoFinded, nodos);
        }
      });
    }

    return nodoResponse;
  }

  private getParentNodes = (nodes: getNodoDto[]): getNodoDto[] => {
    const childIds = new Set<number>();
    
    nodes.forEach(node => {
      if (node.nodeList) {
        node.nodeList.forEach((child) => childIds.add(child.id));
      }
    });
  
    return nodes.filter(node => !childIds.has(node.id));
  };
}