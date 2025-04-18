from sklearn.metrics.pairwise import cosine_similarity
def Avaliar(grupo,nome):
        areas_interesse = ["Programacao", "Video games", "Matematica", "Futebol", "Ficcao", "Quadrinhos", 
                    "Carros", "Academia", "Volei", "Basquete", "Robotica", "Geopolitica", "Xadrez", "Trilhas"]
        areas_por_pessoa = grupo[areas_interesse]
        return cosine_similarity(areas_por_pessoa, nome[areas_interesse])
        