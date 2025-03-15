import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

const IntroHome11 = () => {
  return (
    <div>
        <div>
          <div className="flex justify-center">
            <h1 className="text-[35px] mt-[100px] w-[456px] font-semibold text-center text-[#282739]">ОТВЕЧАЕМ НА ВОПРОСЫ ПОКУПАТЕЛЕЙ</h1>
          </div>
          <div className="px-[350px] mt-[60px] text-[#282739]">
            <Accordion>
              <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
              <Typography component="span">Есть ли гарантия того, что придет именно то, что было заказано? А если я оплачу и товар не придет?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
              <Typography component="span">У меня в городе самокаты Kugoo дешевле. Почему?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
              <Typography component="span">Как осуществляется сервисное обслуживание в моем городе? Где гарантия, что меня обслужат?</Typography>
              </AccordionSummary>
              <AccordionDetails>
              При покупке электросамоката у нас, вам выдается кассовый чек, товарный чек и гарантийный талон – эти документы дают право на гарантийное обслуживание на законодательном уровне.

              Наши сервисные центры находятся в Москве, Санкт-Петербурге и Краснодаре. В случае поломки вы можете обратиться туда.

              Если вы живете в городе, где нет нашего сервисного центра, то наш специалист поможет решить вопрос удаленно. Он сможет понять какая запчасть вышла из строя и отправит ее вам, если вы сможете сами заменить ее. Если удаленно решить вопрос не удастся, специалист создаст трек номер и попросит вас отправить самокат транспортной компанией CDEK. Транспортировку Товара (с ремонта/на ремонт) Покупатель оплачивает самостоятельно или осуществляет доставку Товара до СЦ своими силами и за свой счет.

              В соответствии со ст. 20 ФЗ «О защите прав потребителей» на ремонт по гарантии дается не более 45 дней. В городах, где есть наш сервисный центр ремонт проводится за 3-7 дней.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
              <Typography component="span">Где находятся пункты самовывоза в моем городе?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
    </div>
  )
}

export default IntroHome11