
<script type="text/javascript">
  window.onload = function() { init() };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1Uzo2HbhmOflMYCND9Ocbz_L2PmzqXoEjW_I4JEfLFwY/pubhtml';

  function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  function showInfo(data, tabletop) {
    alert("Successfully processed!")
    console.log(data);
  }
</script>