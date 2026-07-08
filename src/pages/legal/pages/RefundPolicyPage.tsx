import { useTranslation } from "react-i18next";

import { LegalDocument } from "../LegalDocument";
import { LegalLayout } from "../LegalLayout";

function EnglishLegalContent() {
  const { t } = useTranslation();

  return (
    <>
      <h1>
        {t("legal.pages.refundPolicy.blocks.mundpaySRefundAnd")}
        <br />
        {t("legal.pages.refundPolicy.blocks.returnPolicy")}
      </h1>
      <p>{t("legal.pages.refundPolicy.blocks.thisPolicyGovernsAllRefundsReturnsExchangesAnd")}</p>
      <p>{t("legal.pages.refundPolicy.blocks.mundpayOperatesThroughDistinctLegalEntitiesDependingOn")}</p>
      <p>{t("legal.pages.refundPolicy.blocks.orderTrackingSubscriptionCancellationAndAllRefundRequests")}</p>
      <h2>{t("legal.pages.refundPolicy.blocks.section2StandardRefundWindows")}</h2>
      <p>{t("legal.pages.refundPolicy.blocks.refundEligibilityIsTimeBoundAndVariesAccording")}</p>
      <p>{t("legal.pages.refundPolicy.blocks.whereASpecificProductPageExpresslyOffersA")}</p>
      <h2>{t("legal.pages.refundPolicy.blocks.section3PhysicalProductsReturnsExchangesRefunds")}</h2>
      <p>{t("legal.pages.refundPolicy.blocks.toBeEligibleForAReturnOrExchange")}</p>
      <p>{t("legal.pages.refundPolicy.blocks.returnShippingCostsFollowTheNatureOfThe")}</p>
      <h2>{t("legal.pages.refundPolicy.blocks.section4DigitalProductsRefunds")}</h2>
      <p>{t("legal.pages.refundPolicy.blocks.theStandardRefundWindowForDigitalProductsIs")}</p>
      <h2>{t("legal.pages.refundPolicy.blocks.section5SubscriptionsCancellationRefunds")}</h2>
      <p>{t("legal.pages.refundPolicy.blocks.subscriptionsMayBeCancelledAtAnyTimeVia")}</p>
      <h2>{t("legal.pages.refundPolicy.blocks.section6RequestingARefundOrReturn")}</h2>
      <p>{t("legal.pages.refundPolicy.blocks.allRefundAndReturnRequestsShouldBeSubmitted")}</p>
      <p>{t("legal.pages.refundPolicy.blocks.mundpayReservesTheRightToInterveneAndProceed")}</p>
      <h2>{t("legal.pages.refundPolicy.blocks.section7ProcessingTimesRefundMethod")}</h2>
      <p>{t("legal.pages.refundPolicy.blocks.forPhysicalProductsTheRefundIsProcessedWithin")}</p>
      <h2>{t("legal.pages.refundPolicy.blocks.section8ExceptionsSpecialConditions")}</h2>
      <p>{t("legal.pages.refundPolicy.blocks.certainCircumstancesMayLimitOrExcludeRefundEligibility")}</p>
      <h2>{t("legal.pages.refundPolicy.blocks.section9AccountSuspensionBlockingRelatedMeasures")}</h2>
      <p>{t("legal.pages.refundPolicy.blocks.penaltiesArisingFromMisuseOfThePlatformViolation")}</p>
      <p>{t("legal.pages.refundPolicy.blocks.suspensionIsAPreventiveAndTemporaryMeasureThat")}</p>
      <h2>{t("legal.pages.refundPolicy.blocks.section10Privacy")}</h2>
      <p>{t("legal.pages.refundPolicy.blocks.allPersonalAndTransactionalDataCollectedInConnection")}</p>
      <h2>{t("legal.pages.refundPolicy.blocks.section11PolicyUpdates")}</h2>
      <p>{t("legal.pages.refundPolicy.blocks.mundpayMayUpdateThisPolicyAtAnyTime")}</p>
    </>
  );
}

function PortugueseLegalContent() {
  const { t } = useTranslation();

  return (
    <>
      <h1>
        {t("legal.pages.refundPolicy.blocks.politicaDeReembolsoE")}
        <br />
        {t("legal.pages.refundPolicy.blocks.devolucaoDaMundpay")}
      </h1>
      <p>{t("legal.pages.refundPolicy.blocks.estaPoliticaRegulaOsReembolsosDevolucoesTrocasE")}</p>
      <p>{t("legal.pages.refundPolicy.blocks.aMundpayOperaPorMeioDeEntidadesJuridicas")}</p>
      <p>{t("legal.pages.refundPolicy.blocks.oAcompanhamentoDePedidosOCancelamentoDeAssinaturas")}</p>
      <h2>{t("legal.pages.refundPolicy.blocks.section2JanelasPadraoDeReembolso")}</h2>
      <p>{t("legal.pages.refundPolicy.blocks.aElegibilidadeParaReembolsoELimitadaPorPrazo")}</p>
      <p>{t("legal.pages.refundPolicy.blocks.quandoAPaginaDeUmProdutoOferecerExpressamente")}</p>
      <h2>{t("legal.pages.refundPolicy.blocks.section3ProdutosFisicosDevolucaoTrocaEReembolso")}</h2>
      <p>{t("legal.pages.refundPolicy.blocks.paraSerElegivelADevolucaoOuTrocaO")}</p>
      <p>{t("legal.pages.refundPolicy.blocks.osCustosDeFreteDeDevolucaoObservaraoA")}</p>
      <p>{t("legal.pages.refundPolicy.blocks.porOutroLadoNasHipotesesDeDevolucaoPor")}</p>
      <h2>{t("legal.pages.refundPolicy.blocks.section4ProdutosDigitaisReembolso")}</h2>
      <p>{t("legal.pages.refundPolicy.blocks.oPrazoPadraoDeReembolsoParaProdutosDigitais")}</p>
      <h2>{t("legal.pages.refundPolicy.blocks.section5AssinaturasCancelamentoEReembolso")}</h2>
      <p>{t("legal.pages.refundPolicy.blocks.asAssinaturasPodemSerCanceladasAQualquerMomento")}</p>
      <h2>{t("legal.pages.refundPolicy.blocks.section6ComoSolicitarReembolsoOuDevolucao")}</h2>
      <p>{t("legal.pages.refundPolicy.blocks.todasAsSolicitacoesDeReembolsoEDevolucaoDevem")}</p>
      <p>{t("legal.pages.refundPolicy.blocks.aMundpayReservaSeODireitoDeIntervir")}</p>
      <h2>{t("legal.pages.refundPolicy.blocks.section7PrazosDeProcessamentoEFormaDoReembolso")}</h2>
      <p>{t("legal.pages.refundPolicy.blocks.paraProdutosFisicosOReembolsoEProcessadoEm")}</p>
      <h2>{t("legal.pages.refundPolicy.blocks.section8ExcecoesECondicoesEspeciais")}</h2>
      <p>{t("legal.pages.refundPolicy.blocks.determinadasCircunstanciasPodemLimitarOuExcluirAElegibilidade")}</p>
      <h2>{t("legal.pages.refundPolicy.blocks.section9SuspensaoBloqueioEEncerramentoDeConta")}</h2>
      <p>{t("legal.pages.refundPolicy.blocks.asPenalidadesDecorrentesDoUsoIndevidoDaPlataforma")}</p>
      <p>{t("legal.pages.refundPolicy.blocks.aSuspensaoEUmaMedidaPreventivaETemporaria")}</p>
      <h2>{t("legal.pages.refundPolicy.blocks.section10Privacidade")}</h2>
      <p>{t("legal.pages.refundPolicy.blocks.todosOsDadosPessoaisETransacionaisColetadosEm")}</p>
      <p>{t("legal.pages.refundPolicy.blocks.emObservanciaAoPrincipioDaFinalidadeTaisDados")}</p>
      <p>{t("legal.pages.refundPolicy.blocks.informacoesCompletasAcercaDasFinalidadesDoTratamentoDas")}</p>
      <h2>{t("legal.pages.refundPolicy.blocks.section11AtualizacoesDestaPolitica")}</h2>
      <p>{t("legal.pages.refundPolicy.blocks.aMundpayPodeAtualizarEstaPoliticaAQualquer")}</p>
    </>
  );
}

export function RefundPolicyPage() {
  const { i18n } = useTranslation();
  const isPortuguese = i18n.resolvedLanguage?.toLowerCase().startsWith("pt");

  return (
    <LegalLayout>
      <LegalDocument>
        {isPortuguese ? <PortugueseLegalContent /> : <EnglishLegalContent />}
      </LegalDocument>
    </LegalLayout>
  );
}
