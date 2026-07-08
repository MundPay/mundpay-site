import { useTranslation } from "react-i18next";

import { LegalDocument } from "../LegalDocument";
import { LegalLayout } from "../LegalLayout";

function EnglishLegalContent() {
  const { t } = useTranslation();

  return (
    <>
      <h1>
        {t("legal.pages.paymentsFees.blocks.mundpaySPayments")}
        <br />
        {t("legal.pages.paymentsFees.blocks.andFees")}
      </h1>
      <p>{t("legal.pages.paymentsFees.blocks.thisPolicyGovernsAllChargebackHandlingAndPlatform")}</p>
      <p>{t("legal.pages.paymentsFees.blocks.mundpayOperatesThroughDistinctLegalEntitiesDependingOn")}</p>
      <p>{t("legal.pages.paymentsFees.blocks.orderTrackingSubscriptionCancellationAndAllRefundRequests")}</p>
      <h2>{t("legal.pages.paymentsFees.blocks.section2ChargebackPolicy")}</h2>
      <h2>{t("legal.pages.paymentsFees.blocks.section21DefinitionsMundpaysRole")}</h2>
      <p>{t("legal.pages.paymentsFees.blocks.aChargebackOrDisputeArisesWhenACardholder")}</p>
      <p>{t("legal.pages.paymentsFees.blocks.asAParticipantInThePaymentArrangementEcosystem")}</p>
      <h2>{t("legal.pages.paymentsFees.blocks.section22ReserveRetention")}</h2>
      <p>{t("legal.pages.paymentsFees.blocks.mundpayReservesTheRightToRetainFundsFrom")}</p>
      <p>{t("legal.pages.paymentsFees.blocks.theRetentionPeriodMayBeFurtherExtendedWhen")}</p>
      <h2>{t("legal.pages.paymentsFees.blocks.section23PreventiveMeasures")}</h2>
      <p>{t("legal.pages.paymentsFees.blocks.whenEvidenceOfSuspiciousFraudulentOrHighRisk")}</p>
      <p>{t("legal.pages.paymentsFees.blocks.aChargebackRateBelow1OnePercentOf")}</p>
      <h2>{t("legal.pages.paymentsFees.blocks.section24DisputeDefenseProcess")}</h2>
      <p>{t("legal.pages.paymentsFees.blocks.onceAChargebackIsFormallyReportedByThe")}</p>
      <p>{t("legal.pages.paymentsFees.blocks.failureToSubmitDocumentationWithinTheStipulatedPeriod")}</p>
      <h2>{t("legal.pages.paymentsFees.blocks.section25EthocaVerifiAlertServices")}</h2>
      <p>{t("legal.pages.paymentsFees.blocks.mundpayParticipatesInTheEthocaAndVerifiAlert")}</p>
      <h2>{t("legal.pages.paymentsFees.blocks.section26PreChargeback")}</h2>
      <p>{t("legal.pages.paymentsFees.blocks.mundpayMayApplyAPreChargebackMechanismWhich")}</p>
      <p>{t("legal.pages.paymentsFees.blocks.uponIdentificationOfARiskAlertMundpayMay")}</p>
      <h2>{t("legal.pages.paymentsFees.blocks.section3PlatformFeesInternalRateAdjustments")}</h2>
      <h2>{t("legal.pages.paymentsFees.blocks.section31FeeStructureAccess")}</h2>
      <p>{t("legal.pages.paymentsFees.blocks.mundpayChargesProcessingFeesOnEachTransactionCompleted")}</p>
      <h2>{t("legal.pages.paymentsFees.blocks.section32InternalRateAdjustments")}</h2>
      <p>{t("legal.pages.paymentsFees.blocks.theUserAcknowledgesAndAgreesThatTheFees")}</p>
      <p>{t("legal.pages.paymentsFees.blocks.feeChangesWillAlwaysBeCommunicatedInAdvance")}</p>
      <p>{t("legal.pages.paymentsFees.blocks.anyChangeToTheStandardPlatformFeeSchedule")}</p>
      <h2>{t("legal.pages.paymentsFees.blocks.section33CurrencyExchangeFxVariations")}</h2>
      <p>{t("legal.pages.paymentsFees.blocks.forCrossBorderAndInternationalTransactionsFeesSettlements")}</p>
      <p>{t("legal.pages.paymentsFees.blocks.supplierSellerOperatingAcrossMultipleCurrenciesExpresslyAcknowledge")}</p>
      <h2>{t("legal.pages.paymentsFees.blocks.section34ReservesHolds")}</h2>
      <p>{t("legal.pages.paymentsFees.blocks.inAdditionToChargebackRelatedReservesDescribedIn")}</p>
      <h2>{t("legal.pages.paymentsFees.blocks.section4AccountSuspensionBlockingRelatedMeasures")}</h2>
      <p>{t("legal.pages.paymentsFees.blocks.penaltiesArisingFromMisuseOfThePlatformViolation")}</p>
      <p>{t("legal.pages.paymentsFees.blocks.suspensionIsAPreventiveAndTemporaryMeasureThat")}</p>
      <h2>{t("legal.pages.paymentsFees.blocks.section5MinimumAccountWithdrawalPolicy")}</h2>
      <p>{t("legal.pages.paymentsFees.blocks.withdrawalsOnThePlatformAreSubjectToMinimum")}</p>
      <p>{t("legal.pages.paymentsFees.blocks.forAccountsOperatingInLocalCurrencyBrazilianReal")}</p>
      <p>{t("legal.pages.paymentsFees.blocks.mundpayReservesTheRightToReviewModifyOr")}</p>
      <h2>{t("legal.pages.paymentsFees.blocks.section6Privacy")}</h2>
      <p>{t("legal.pages.paymentsFees.blocks.allPersonalAndTransactionalDataCollectedInConnection")}</p>
      <h2>{t("legal.pages.paymentsFees.blocks.section7PolicyUpdates")}</h2>
      <p>{t("legal.pages.paymentsFees.blocks.mundpayMayUpdateThisPolicyAtAnyTime")}</p>
    </>
  );
}

function PortugueseLegalContent() {
  const { t } = useTranslation();

  return (
    <>
      <h1>
        {t("legal.pages.paymentsFees.blocks.pagamentosETaxas")}
        <br />
        {t("legal.pages.paymentsFees.blocks.daMundpay")}
      </h1>
      <p>{t("legal.pages.paymentsFees.blocks.estaPoliticaRegulaAGestaoDeChargebacksE")}</p>
      <p>{t("legal.pages.paymentsFees.blocks.aMundpayOperaPorMeioDeEntidadesJuridicas")}</p>
      <p>{t("legal.pages.paymentsFees.blocks.oAcompanhamentoDePedidosOCancelamentoDeAssinaturas")}</p>
      <h2>{t("legal.pages.paymentsFees.blocks.section2PoliticaDeChargeback")}</h2>
      <h2>{t("legal.pages.paymentsFees.blocks.section21Definicao")}</h2>
      <p>{t("legal.pages.paymentsFees.blocks.oChargebackOuDisputaOcorreQuandoUmTitular")}</p>
      <p>{t("legal.pages.paymentsFees.blocks.comoParticipanteDoEcossistemaDeArranjosDePagamento")}</p>
      <h2>{t("legal.pages.paymentsFees.blocks.section22ReservaERetencaoDeFundos")}</h2>
      <p>{t("legal.pages.paymentsFees.blocks.aMundpayReservaSeODireitoDeReter")}</p>
      <p>{t("legal.pages.paymentsFees.blocks.oPrazoDeRetencaoPodeSerAdicionalmenteEstendido")}</p>
      <h2>{t("legal.pages.paymentsFees.blocks.section23MedidasPreventivas")}</h2>
      <p>{t("legal.pages.paymentsFees.blocks.quandoIdentificadaEvidenciaDeTransacoesSuspeitasFraudulentasOu")}</p>
      <p>{t("legal.pages.paymentsFees.blocks.umaTaxaDeChargebackInferiorA1Um")}</p>
      <h2>{t("legal.pages.paymentsFees.blocks.section24ProcessoDeDefesa")}</h2>
      <p>{t("legal.pages.paymentsFees.blocks.umaVezQueOChargebackSejaFormalmenteReportado")}</p>
      <p>{t("legal.pages.paymentsFees.blocks.aNaoApresentacaoDeDocumentacaoDentroDoPrazo")}</p>
      <h2>{t("legal.pages.paymentsFees.blocks.section25ServicosEthocaVerifi")}</h2>
      <p>{t("legal.pages.paymentsFees.blocks.aMundpayParticipaDosServicosDeAlertaEthoca")}</p>
      <h2>{t("legal.pages.paymentsFees.blocks.section26PreChargeback")}</h2>
      <p>{t("legal.pages.paymentsFees.blocks.aMundpayPoderaAplicarMecanismoDePreChargeback")}</p>
      <p>{t("legal.pages.paymentsFees.blocks.umaVezIdentificadoOAlertaDeRiscoA")}</p>
      <h2>{t("legal.pages.paymentsFees.blocks.section3TaxasDaPlataformaEAjustesInternos")}</h2>
      <h2>{t("legal.pages.paymentsFees.blocks.section31EstruturaDeTaxasEAcesso")}</h2>
      <p>{t("legal.pages.paymentsFees.blocks.aMundpayAplicaTaxasDeProcessamentoSobreCada")}</p>
      <p>{t("legal.pages.paymentsFees.blocks.nesseContextoAsTaxasAbrangemConformeAplicavelA")}</p>
      <p>{t("legal.pages.paymentsFees.blocks.aTituloMeramenteReferencialTaisEncargosPoderaoAtingir")}</p>
      <h2>{t("legal.pages.paymentsFees.blocks.section32AjustesInternosDeTaxas")}</h2>
      <p>{t("legal.pages.paymentsFees.blocks.asTaxasEncargosEDemaisValoresCobradosPela")}</p>
      <p>{t("legal.pages.paymentsFees.blocks.asAlteracoesNasTaxasSeraoSempreComunicadasPreviamente")}</p>
      <p>{t("legal.pages.paymentsFees.blocks.qualquerAlteracaoNaTabelaPadraoDeTaxasDa")}</p>
      <h2>{t("legal.pages.paymentsFees.blocks.section33CambioEVariacaoCambialFx")}</h2>
      <p>{t("legal.pages.paymentsFees.blocks.paraTransacoesInternacionaisETransfronteiricasAsTaxasLiquidacoes")}</p>
      <p>{t("legal.pages.paymentsFees.blocks.osVendedoresProdutoresQueOperamEmMultiplasMoedas")}</p>
      <h2>{t("legal.pages.paymentsFees.blocks.section34ReservasEBloqueios")}</h2>
      <p>{t("legal.pages.paymentsFees.blocks.alemDasReservasRelacionadasAChargebacksDescritasNa")}</p>
      <h2>{t("legal.pages.paymentsFees.blocks.section4SuspensaoBloqueioEEncerramentoDeConta")}</h2>
      <p>{t("legal.pages.paymentsFees.blocks.asPenalidadesDecorrentesDoUsoIndevidoDaPlataforma")}</p>
      <p>{t("legal.pages.paymentsFees.blocks.aSuspensaoEUmaMedidaPreventivaETemporaria")}</p>
      <h2>{t("legal.pages.paymentsFees.blocks.section5LimiteMinimoParaSolicitacaoDeSaques")}</h2>
      <p>{t("legal.pages.paymentsFees.blocks.aRealizacaoDeSaquesNaPlataformaEstaCondicionada")}</p>
      <p>{t("legal.pages.paymentsFees.blocks.paraContasOperandoEmMoedaNacionalRealBrl")}</p>
      <p>{t("legal.pages.paymentsFees.blocks.osValoresEfetivamenteAplicaveisEstaraoDevidamenteDiscriminadosNo")}</p>
      <p>{t("legal.pages.paymentsFees.blocks.aMundpayReservaSeODireitoDeRevisar")}</p>
      <h2>{t("legal.pages.paymentsFees.blocks.section6Privacidade")}</h2>
      <p>{t("legal.pages.paymentsFees.blocks.todosOsDadosPessoaisETransacionaisColetadosEm")}</p>
      <p>{t("legal.pages.paymentsFees.blocks.emObservanciaAoPrincipioDaFinalidadeTaisDados")}</p>
      <p>{t("legal.pages.paymentsFees.blocks.informacoesCompletasAcercaDasFinalidadesDoTratamentoDas")}</p>
      <h2>{t("legal.pages.paymentsFees.blocks.section7AtualizacoesDestaPolitica")}</h2>
      <p>{t("legal.pages.paymentsFees.blocks.aMundpayPodeAtualizarEstaPoliticaAQualquer")}</p>
    </>
  );
}

export function PaymentsFeesPage() {
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
