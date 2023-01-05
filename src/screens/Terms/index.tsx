import React from 'react';
import AppButton from '../../components/AppButton';
import AppHeader from '../../components/AppHeader';
import { Container, ContainerBody, ViewBox, ViewBoxHeader, ViewBoxH1, ViewBoxH1Line, ViewBoxBody, ViewBoxGroup, ViewBoxTitle, ViewBoxText } from './styles';

export function Terms({ navigation }){
    return (
        <Container>
            <ContainerBody>
                <AppHeader />
                <ViewBox>
                    <ViewBoxHeader>
                        <ViewBoxH1>Termo de Acordo com a Lei Geral de Proteção de Dados</ViewBoxH1>
                        <ViewBoxH1Line />
                    </ViewBoxHeader>
                    <ViewBoxBody>
                        <ViewBoxGroup>
                            <ViewBoxTitle>TERMOS E CONDIÇÕES DE USO DO APLICATIVO IF CONTROL</ViewBoxTitle>

                            <ViewBoxTitle>1. Do objetivo</ViewBoxTitle>
                            <ViewBoxText>A plataforma visa licenciar o uso de seu sistema, fornecendo e proporcionando a biossegurança nas atividades do IFSP Câmpus Guarulhos por meio do monitoramento de casos da COVID-19. </ViewBoxText>
                            
                            <ViewBoxTitle>2. Da aceitação</ViewBoxTitle>
                            <ViewBoxText>O presente Termo estabelece obrigações de livre e espontânea vontade, por tempo indeterminado, entre a plataforma e os usuários do aplicativo. Ao utilizar a plataforma o usuário aceita integralmente as presentes normas e compromete-se a obedecê-las, sob o risco de aplicação das penalidades cabíveis. A aceitação do presente instrumento é imprescindível para o acesso e para a utilização desta aplicação. Caso não concorde com as disposições deste instrumento, o usuário não deve utilizá-los. </ViewBoxText>

                            <ViewBoxTitle>3. Do acesso dos usuários</ViewBoxTitle>
                            <ViewBoxText>Serão utilizadas soluções técnicas à disposição do responsável pela plataforma para possibilitar o acesso ao aplicativo 24 horas por dia, 7 dias por semana. Contudo, a navegação no aplicativo pode ser interrompida, limitada ou suspensa para atualizações, modificações ou qualquer ação necessária para o seu bom funcionamento. </ViewBoxText>

                            <ViewBoxTitle>4. Do cadastro</ViewBoxTitle>
                            <ViewBoxText>O acesso às funcionalidades da plataforma exigirá a realização de um cadastro. Ao se cadastrar o usuário deverá informar os dados completos, atuais e válidos, sendo de sua exclusiva responsabilidade manter referidos dados atualizados, bem como o usuário se compromete com a autenticidade das informações fornecidas.</ViewBoxText>
                            <ViewBoxText>O usuário se compromete a não informar seus dados cadastrais e/ou de acesso à aplicação a terceiros, responsabilizando-se integralmente pelo uso que deles seja feito.</ViewBoxText>
                            <ViewBoxText>Menores de 18 anos e aqueles que não possuírem plena capacidade civil deverão obter previamente o consentimento expresso de seus responsáveis legais para utilização da plataforma, sendo de responsabilidade exclusiva dos mesmos o eventual acesso por menores de idade e por aqueles que não possuem plena capacidade civil sem a prévia autorização. Mediante a realização do cadastro o usuário declara e garante expressamente ser plenamente capaz, podendo exercer e usufruir livremente da plataforma. O usuário deverá fornecer um endereço de e-mail válido, através do qual o aplicativo realizará todas as comunicações necessárias.</ViewBoxText>
                            <ViewBoxText>Após a confirmação do cadastro, o usuário possuirá um login e uma senha pessoal, a qual assegura ao usuário o acesso individual à mesma. Desta forma, compete ao usuário exclusivamente a manutenção de referida senha de maneira confidencial e segura, evitando o acesso indevido às informações pessoais.</ViewBoxText>
                            <ViewBoxText>Toda e qualquer atividade realizada com o uso da senha será de responsabilidade do usuário, que deverá informar prontamente a plataforma em caso de uso indevido da respectiva senha.</ViewBoxText>
                            <ViewBoxText>Não será permitido ceder, vender, alugar ou transferir, de qualquer forma, a conta, que é pessoal e intransferível.</ViewBoxText>
                            <ViewBoxText>Caberá ao usuário assegurar que o seu equipamento seja compatível com as características técnicas que viabilize a utilização da plataforma.</ViewBoxText>
                            <ViewBoxText>O usuário poderá, a qualquer tempo, requerer o cancelamento de seu cadastro junto ao aplicativo IF Control.</ViewBoxText>
                            <ViewBoxText>O usuário, ao aceitar os Termos e Política de Privacidade, autoriza expressamente a plataforma a coletar, usar, armazenar, tratar, ceder ou utilizar as informações derivadas do uso da plataforma, incluindo todas as informações preenchidas pelo usuário no momento em que realizar ou atualizar seu cadastro, além de outras expressamente descritas na Política de Privacidade que deverá ser autorizada pelo usuário. </ViewBoxText>

                            <ViewBoxTitle>5. Do suporte </ViewBoxTitle>
                            <ViewBoxText>Em caso de qualquer dúvida, sugestão ou problema com a utilização da plataforma, o usuário poderá entrar em contato com o suporte, através do e-mail cragru@ifsp.edu.br, estes serviços de atendimento ao usuário estarão disponíveis nos seguintes dias e horários úteis: segunda-feira à sexta-feira das 10:00 horas até as 17:00 horas.</ViewBoxText>

                            <ViewBoxTitle>6. Das responsabilidades</ViewBoxTitle>
                            <ViewBoxText>É de responsabilidade do usuário: </ViewBoxText>
                            <ViewBoxText>A) pelo cumprimento e respeito ao conjunto de regras disposto nesse Termo de Condições Geral de Uso, na respectiva Política de Privacidade e na legislação nacional e internacional;</ViewBoxText>
                            <ViewBoxText>B) pelo resguardo às informações de acesso à sua conta pessoal. </ViewBoxText>
                            <ViewBoxText>É de responsabilidade do aplicativo IF Control:</ViewBoxText>
                            <ViewBoxText>A) indicar o modelo de uso do aplicativo.</ViewBoxText>

                            <ViewBoxTitle>7. Das sanções</ViewBoxTitle>
                            <ViewBoxText>Sem prejuízo das demais medidas legais cabíveis, os administradores do aplicativo IF Control poderão advertir, suspender ou cancelar a conta do usuário:</ViewBoxText>
                            <ViewBoxText>A) que violar qualquer dispositivo do presente Termo;</ViewBoxText>
                            <ViewBoxText>B) que descumprir os seus deveres de usuário;</ViewBoxText>
                            <ViewBoxText>C) que tiver qualquer comportamento fraudulento, doloso ou que ofenda a terceiros.</ViewBoxText>

                            <ViewBoxTitle>8. Das alterações</ViewBoxTitle>
                            <ViewBoxText>Os itens descritos no presente instrumento poderão sofrer alterações, unilateralmente e a qualquer tempo, por parte do IF Control, para adequar ou modificar a plataforma, bem como para atender novas exigências legais. </ViewBoxText>

                            <ViewBoxTitle>9. Da política de privacidade</ViewBoxTitle>
                            <ViewBoxText>Além do presente Termo, o usuário deverá consentir com as disposições contidas na respectiva Política de Privacidade a ser apresentada a todos os interessados dentro da interface da plataforma. </ViewBoxText>
                        
                            <ViewBoxTitle>POLITICA DE PRIVACIDADE</ViewBoxTitle>
                            <ViewBoxText>A presente Política de Privacidade contém informações sobre coleta, uso, armazenamento, tratamento e proteção dos dados pessoais dos usuários do aplicativo IF Control, com a finalidade de demonstrar absoluta transparência quanto ao assunto e esclarecer a todos interessados sobre os tipos de dados que são coletados, os motivos da coleta e a forma como os usuários podem gerenciar ou excluir as suas informações pessoais. </ViewBoxText>
                            <ViewBoxText>O presente documento foi elaborado em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei 13.709/18), o Marco Civil da Internet (Lei 12.965/14) (e o Regulamento da UE n. 2016/6790). Ainda, o documento poderá ser atualizado em decorrência de eventual atualização legislativa. </ViewBoxText>

                            <ViewBoxTitle>1. Como recolhemos os dados pessoais dos usuários?</ViewBoxTitle>
                            <ViewBoxText>Os dados pessoais dos usuários são recolhidos pelo aplicativo da seguinte maneira:</ViewBoxText>
                            <ViewBoxText>A) Quando o usuário cria uma conta no aplicativo IF Control: esses dados são os de identificação básicos, como nome completo, email, vínculo com a instituição, curso, quantidade de doses de vacina e se faz parte do grupo de risco. Ficam cientes os usuários de que seus dados na plataforma estarão acessíveis aos coordenadores de curso e colaboradores da área de administração do IFSP Câmpus Guarulhos. </ViewBoxText>
                            <ViewBoxText>B) Quando um usuário acessa o aplicativo IF Control: as informações sobre interação e acesso são coletadas pela instituição para que haja a biossegurança nas atividades do IFSP Câmpus Guarulhos por meio do monitoramento de casos positivo de COVID-19. Estes dados podem tratar sobre a movimentação dos usuários nas salas para que haja o monitoramento dos casos positivos de COVID-19 dentro do Instituto, bem como o tempo de permanência nos respectivos ambientes. </ViewBoxText>

                            <ViewBoxTitle>2. Quais dados pessoais recolhemos dos usuários?</ViewBoxTitle>
                            <ViewBoxText>Os dados pessoais do usuário recolhidos são os seguintes:</ViewBoxText>
                            <ViewBoxText>A) Dados para a criação da conta no aplicativo IF Control: nome completo, email, vínculo com a instituição, curso, quantidade de doses de vacina e se faz parte do grupo de risco. </ViewBoxText>
                            <ViewBoxText>B) Dados sensíveis: a plataforma poderá coletar dados sensíveis do usuário (relativos ao estado de saúde do usuário).</ViewBoxText>

                            <ViewBoxTitle>3. Por que armazenamos os dados pessoais dos usuários?</ViewBoxTitle>
                            <ViewBoxText>Os dados pessoais do usuário e do visitante coletados e armazenados pelo aplicativo IF Control tem por finalidade:</ViewBoxText>
                            <ViewBoxText>A) Dados de cadastro: permitir o acesso do usuário ao aplicativo;</ViewBoxText>
                            <ViewBoxText>B) Propiciar um ambiente que valorize a biossegurança no câmpus do IFSP Guarulhos por meio do monitoramento de casos positivos ou suspeitos de COVID-19.</ViewBoxText>
                            <ViewBoxText>O tratamento de dados pessoais para finalidades não previstas nesta Política de Privacidade somente ocorrerá mediante comunicação prévia ao usuário, de modo que os direitos e obrigações aqui previstos permanecem aplicáveis. </ViewBoxText>

                            <ViewBoxTitle>4. Por quanto tempo os dados pessoais ficam armazenados?</ViewBoxTitle>
                            <ViewBoxText>Os dados pessoais dos usuários são armazenados pela plataforma durante o período necessário para o cumprimento das finalidades previstas no presente documento, conforme o disposto no inciso I do artigo 15 da Lei 13.709/18.</ViewBoxText>
                            <ViewBoxText>Os dados podem ser removidos ou anonimizados a pedido do usuário, excetuando os casos em que a lei oferecer outro tratamento.</ViewBoxText>
                            <ViewBoxText>Ainda, os dados pessoais dos usuários apenas podem ser conservados após o término de seu tratamento nas seguintes hipóteses previstas no artigo 16 da referida lei: </ViewBoxText>
                            <ViewBoxText>I - Cumprimento de obrigação legal ou regulatória pelo controlador;</ViewBoxText>
                            <ViewBoxText>II - Estudo por órgão de pesquisa, garantida, sempre que possível, a anonimização dos dados pessoais;</ViewBoxText>
                            <ViewBoxText>III - Transferência a terceiro, desde que respeitados os requisitos de tratamento de dados dispostos nesta Lei;</ViewBoxText>
                            <ViewBoxText>IV - Uso exclusivo do controlador, vedado seu acesso por terceiro, e desde que anonimizados os dados.</ViewBoxText>

                            <ViewBoxTitle>5. Segurança dos dados pessoais</ViewBoxTitle>
                            <ViewBoxText>A plataforma se compromete a aplicar as medidas técnicas e organizativas aptas a proteger os dados pessoais de acessos não autorizados e de situações de destruição, perda, alteração, comunicação ou difusão de tais dados.</ViewBoxText>
                            <ViewBoxText>A plataforma não se exime de responsabilidade por culpa exclusiva de terceiros, como em caso de ataque de hackers ou crackers, ou culpa exclusiva do usuário. A aplicação se compromete a comunicar o usuário em caso de alguma violação de segurança dos seus dados pessoais.</ViewBoxText>
                            <ViewBoxText>Os dados pessoais armazenados são tratados com confidencialidade, dentro dos limites legais. No entanto, podemos divulgar suas informações pessoais caso sejamos obrigados pela lei para fazê-lo ou se você violar nossos Termos de Serviço. </ViewBoxText>

                            <ViewBoxTitle>6. Compartilhamento de Informações</ViewBoxTitle>
                            <ViewBoxText>O compartilhamento de dados do usuário ocorre com os dados referentes a identificação e informações de contato com outros usuários, respeitando o anonimato. </ViewBoxText>

                            <ViewBoxTitle>7. Os dados pessoais armazenados são transferidos para terceiros?</ViewBoxTitle>
                            <ViewBoxText>Os dados pessoais podem ser compartilhados com: aos coordenadores de curso e colaboradores da área de administração do IFSP Câmpus Guarulhos.</ViewBoxText>
                            <ViewBoxText>Os terceiros indicados recebem os dados na medida do necessário para permitir que eles realizem o monitoramento dos casos de COVID-19 dentro da instituição. </ViewBoxText>

                            <ViewBoxTitle>8. Consentimento</ViewBoxTitle>
                            <ViewBoxText>Ao utilizar os serviços e fornecer as informações pessoais na plataforma, o usuário está consentindo com a presente Política de Privacidade.</ViewBoxText>
                            <ViewBoxText>O usuário, ao cadastrar-se, manifesta conhecer e pode exercitar seus direitos de cancelar seu cadastro, acessar e atualizar seus dados pessoais e garante a veracidade das informações por ele disponibilizadas. </ViewBoxText>

                            <ViewBoxTitle>9. Alterações futuras da Política de Privacidade</ViewBoxTitle>
                            <ViewBoxText>Reservamos o direito de modificar essa Política de Privacidade a qualquer momento, então, é recomendável que o usuário e visitante revise-a com frequência.</ViewBoxText>
                            <ViewBoxText>As alterações e esclarecimentos vão surtir efeito imediatamente após sua publicação na plataforma. Quando realizadas alterações os usuários serão notificados. Ao utilizar o serviço ou fornecer informações pessoais após eventuais modificações, o usuário e visitante demonstra sua concordância com as novas normas. </ViewBoxText>
                        </ViewBoxGroup>
                    </ViewBoxBody>
                </ViewBox>
                <AppButton 
                    text="Li e Aceito os Termos" 
                    backgroundColor="#005600" 
                    accessibilityLabel="Pressione este botão para informar que concorda com os termos e deseja se cadastrar no aplicativo"
                    onPress={() => navigation.navigate('Register')}
                />
            </ContainerBody>
        </Container>
    );
}
