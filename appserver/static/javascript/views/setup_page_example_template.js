function get_template() {
  const template_string =
      "<div class='title'>" +
      "    <h1>Welcome to the Splunk Archive Plus Restore App</h1>" +
      "</div>" +
      "<div class='setup container'>" +
      "    <div class='left'>" +
      "        <h2>Overview</h2>" +
      "        This setup page will create/modify a restore.conf file in this app's local directory with the parameters needed for the bucket restore." +
      "        <br/>" +
      "        </ul>" +
      "        <h2>Splunk Restore Parameters</h2>" +
      "        <div>" +
      "        </div>" +
      "        <div class='field macro_stanza'>" +
      "            <div class='title'>" +
      "                <div>" +
      "                    <h3>Splunk Index Name:</h3>" +
      "                </div>" +
      "            </div>" +
      "            </br>" +
      "            <div class='user_input'>" +
      "                <div class='text'>" +
      "                    <input type='text' name='macro_stanza' placeholder='Index Name Here'></input>" +
      "                </div>" +
      "            </div>" +
      "        </div>" +
      "        <div class='field macro_earliest'>" +
      "            <div class='title'>" +
      "                <h3>Splunk Bucket Earliest Time:</h3>" +
      "            </div>" +
      "            </br>" +
      "            <div class='user_input'>" +
      "                <div class='text'>" +
      "                    <input type='text' name='macro_earliest' placeholder='bucket earliest epoch time'></input>" +
      "                </div>" +
      "            </div>" +
      "        </div>" +
      "        <div class='field macro_latest'>" +
      "            <div class='title'>" +
      "                <h3>Splunk Bucket Latest Time:</h3>" +
      "                Please specify the Splunk bucket latest time." +
      "            </div>" +
      "            </br>" +
      "            <div class='user_input'>" +
      "                <div class='text'>" +
      "                    <input type='text' name='macro_latest' placeholder='bucket latest epoch time'></input>" +
      "                </div>" +
      "            </div>" +
      "        </div>" +
      "        <h2>Complete the Restore</h2>" +
      "        <div>" +
      "            Please press the 'Perform Restore' button below to complete the Splunk bucket restore process." +
      "        </div>" +
      "        <br/>" +
      "        <div>" +
      "            <button name='setup_button' class='setup_button'>" +
      "                Perform Restore" +
      "            </button>" +
      "        </div>" +
      "        <br/>" +
      "        <div class='error output'>" +
      "        </div>" +
      "    </div>" +
      "</div>";

  return template_string;
}

export default get_template;
